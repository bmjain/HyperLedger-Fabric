package main

import (
	"errors"
	"fmt"
	"strconv"
	"strings"
	"github.com/hyperledger/fabric/core/chaincode/shim"
	"encoding/json"
//	"regexp"
)

var logger = shim.NewLogger("CLDChaincode")


//==============================================================================================================================
//	 Structure Definitions
//==============================================================================================================================
//	Chaincode - A blank struct for use with Shim (A HyperLedger included go file used for get/put state
//				and other HyperLedger functions)
//==============================================================================================================================
type  SimpleChaincode struct {
}

//==============================================================================================================================
//	Vehicle - Defines the structure for a car object. JSON on right tells it what JSON fields to map to
//			  that element when reading a JSON object into the struct e.g. JSON make -> Struct Make.
//==============================================================================================================================

type  Manufacturer struct {
	Name string `json:"name"`
	Address string `json:"address"`
	State  string `json:"state"`
	City  string `json:"city"`
	ZipCode  string `json:"zipcode"`
}

type  Dealer struct {
	Name string `json:"name"`
	Address string `json:"address"`
	State  string `json:"state"`
	City  string `json:"city"`
	ZipCode  string `json:"zipcode"`
}

type  VehicleOwner struct {
	Name string `json:"name"`
	Address string `json:"address"`
	State  string `json:"state"`
	City  string `json:"city"`
	ZipCode  string `json:"zipcode"`
}

type Vehicle struct {
	VIN            					string  	    `json:"vin"`
	Make            				string  	    `json:"make"`
	Model           				string  	    `json:"model"`
	Colour          				string  	    `json:"colour"`
	Reg             				string  	    `json:"reg"`
	Year            				string  	    `json:"year"`
	FuelType						string  	    `json:"fueltype"`
	BodyType  						string 		    `json:"bodytype"`
	StateLicenseNumber 				string  	    `json:"statelicensenumber"`
	VehicleType						string 		    `json:"vehicletype"`
	MotorCycleEngineNumber			string  	    `json:"motorcycleenginenumber"`
	Manufacturer_Details			Manufacturer    `json:"manufacturer_details"`
	Dealer_Details					Dealer 		    `json:"dealer_details"`
	Owner_Details			        []VehicleOwner  `json:"owner_details"`
	OdometerReading             	int 		    `json:"odometerreading"`
	MSRP 							int             `json:"msrp"`
	SellingPrice 					int             `json:"sellingprice"`
	Status          				int             `json:"status"`
	V5cID           				string          `json:"v5cid"`
	RegistrationNumber				string          `json:"reg_no"`
	Reg_Complete_Status				bool            `json:"reg_complete_status"`
}

//==============================================================================================================================
//	V5C Holder - Defines the structure that holds all the v5cIDs for vehicles that have been created.
//				Used as an index when querying all vehicles.
//==============================================================================================================================

type V5C_Holder struct {
	V5Cs 	[]string `json:"v5cs"`
}


//==============================================================================================================================
//	User_and_eCert - Struct for storing the JSON of a user and their ecert
//==============================================================================================================================

type User_and_eCert struct {
	Identity string `json:"identity"`
	eCert string `json:"ecert"`
}

//==============================================================================================================================
//	Init Function - Called when the user deploys the chaincode
//==============================================================================================================================
func (t *SimpleChaincode) Init(stub shim.ChaincodeStubInterface, function string, args []string) ([]byte, error) {

	

	var v5cIDs V5C_Holder

	bytes, err := json.Marshal(v5cIDs)

    if err != nil { return nil, errors.New("Error creating V5C_Holder record") }
	err = stub.PutState("v5cIDs", bytes)

	for i:=0; i < len(args); i=i+2 {
		t.add_ecert(stub, args[i], args[i+1])
	}

	return nil, nil
}

//==============================================================================================================================
//	 General Functions
//==============================================================================================================================
//	 get_ecert - Takes the name passed and calls out to the REST API for HyperLedger to retrieve the ecert
//				 for that user. Returns the ecert as retrived including html encoding.
//==============================================================================================================================
func (t *SimpleChaincode) get_ecert(stub shim.ChaincodeStubInterface, name string) ([]byte, error) {

	ecert, err := stub.GetState(name)

	if err != nil { return nil, errors.New("Couldn't retrieve ecert for user " + name) }

	return ecert, nil
}

//==============================================================================================================================
//	 add_ecert - Adds a new ecert and user pair to the table of ecerts
//==============================================================================================================================

func (t *SimpleChaincode) add_ecert(stub shim.ChaincodeStubInterface, name string, ecert string) ([]byte, error) {


	err := stub.PutState(name, []byte(ecert))

	if err == nil {
		return nil, errors.New("Error storing eCert for user " + name + " identity: " + ecert)
	}

	return nil, nil

}


//==============================================================================================================================
//	 retrieve_v5c - Gets the state of the data at v5cID in the ledger then converts it from the stored
//					JSON into the Vehicle struct for use in the contract. Returns the Vehcile struct.
//					Returns empty v if it errors.
//==============================================================================================================================
func (t *SimpleChaincode) retrieve_v5c(stub shim.ChaincodeStubInterface, v5cID string) (Vehicle, error) {

	var v Vehicle

	bytes, err := stub.GetState(v5cID);
	if err != nil {	fmt.Printf("RETRIEVE_V5C: Failed to invoke vehicle_code: %s", err); return v, errors.New("RETRIEVE_V5C: Error retrieving vehicle with v5cID = " + v5cID) }

	err = json.Unmarshal(bytes, &v);

    if err != nil {	fmt.Printf("RETRIEVE_V5C: Corrupt vehicle record "+string(bytes)+": %s", err); return v, errors.New("RETRIEVE_V5C: Corrupt vehicle record"+string(bytes))	}

	return v, nil
}

//==============================================================================================================================
// save_changes - Writes to the ledger the Vehicle struct passed in a JSON format. Uses the shim file's
//				  method 'PutState'.
//==============================================================================================================================
func (t *SimpleChaincode) save_changes(stub shim.ChaincodeStubInterface, v Vehicle) (bool, error) {

	bytes, err := json.Marshal(v)

	if err != nil { fmt.Printf("SAVE_CHANGES: Error converting vehicle record: %s", err); return false, errors.New("Error converting vehicle record") }

	err = stub.PutState(v.V5cID, bytes)

	if err != nil { fmt.Printf("SAVE_CHANGES: Error storing vehicle record: %s", err); return false, errors.New("Error storing vehicle record") }

	return true, nil
}

//==============================================================================================================================
//	 Router Functions
//==============================================================================================================================
//	Invoke - Called on chaincode invoke. Takes a function name passed and calls that function. Converts some
//		  initial arguments passed to other things for use in the called function e.g. name -> ecert
//==============================================================================================================================
func (t *SimpleChaincode) Invoke(stub shim.ChaincodeStubInterface, function string, args []string) ([]byte, error) {


	logger.Debug("function: ", function)
  //  logger.Debug("caller: ", caller)
   // logger.Debug("affiliation: ", caller_affiliation)
	if function == "create_vehicle" {
        return t.create_vehicle(stub, args[0])
	} else if function == "Update_vehicle_details" {
        return t.Update_vehicle_details(stub, args[0])
	} else if function == "Transfer_vehicle_Ownership" {
        return t.Transfer_vehicle_Ownership(stub, args[0])
	}
}
//=================================================================================================================================
//	Query - Called on chaincode query. Takes a function name passed and calls that function. Passes the
//  		initial arguments passed are passed on to the called function.
//=================================================================================================================================
func (t *SimpleChaincode) Query(stub shim.ChaincodeStubInterface, function string, args []string) ([]byte, error) {

	
    logger.Debug("function: ", function)

	if function == "get_vehicle_details" {
		if len(args) != 1 { fmt.Printf("Incorrect number of arguments passed"); return nil, errors.New("QUERY: Incorrect number of arguments passed") }
		v, err := t.retrieve_v5c(stub, args[0])
		//v, err := t.retrieve_vin(stub, args[0])
		if err != nil { fmt.Printf("QUERY: Error retrieving v5c: %s", err); return nil, errors.New("QUERY: Error retrieving v5c "+err.Error()) }
		return t.get_vehicle_details(stub, v)
	} else if function == "check_unique_v5c" {
		return t.check_unique_v5c(stub, args[0])
		} else if function == "get_all_vehicles" {
		return t.get_all_vehicles(stub)
	} else if function == "get_vehicles" {
		return t.get_vehicles(stub,args)
	} else if function == "get_ecert" {
		return t.get_ecert(stub, args[0])
	} else if function == "ping" {
		return t.ping(stub)
	}

	return nil, errors.New("Received unknown function invocation " + function)

}

//=================================================================================================================================
//	 Ping Function
//=================================================================================================================================
//	 Pings the peer to keep the connection alive
//=================================================================================================================================
func (t *SimpleChaincode) ping(stub shim.ChaincodeStubInterface) ([]byte, error) {
	return []byte("Hello, world!"), nil
}

//=================================================================================================================================
//	 Create Function
//=================================================================================================================================
//	 Create Vehicle - Creates the initial JSON for the vehcile and then saves it to the ledger.
//=================================================================================================================================
func (t *SimpleChaincode) create_vehicle(stub shim.ChaincodeStubInterface,  vehiclebody string) ([]byte, error) {
	var v Vehicle

	err := json.Unmarshal([]byte(vehiclebody), &v)							// Convert the JSON defined above into a vehicle object for go

																		if err != nil { return nil, errors.New("Invalid JSON object") }
	record, err := stub.GetState(v.V5cID) 								// If not an error then a record exists so cant create a new car with this V5cID as it must be unique

																		if record != nil { return nil, errors.New("Vehicle already exists") }

	if 	caller_affiliation != AUTHORITY {							// Only the regulator can create a new v5c

		return nil, errors.New(fmt.Sprintf("Permission Denied. create_vehicle. %v === %v", caller_affiliation, AUTHORITY))

	}

	_, err  = t.save_changes(stub, v)

																		if err != nil { fmt.Printf("CREATE_VEHICLE: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	bytes, err := stub.GetState("v5cIDs")

																		if err != nil { return nil, errors.New("Unable to get v5cIDs") }

	var v5cIDs V5C_Holder
	//var vins VIN_Holder

	err = json.Unmarshal(bytes, &v5cIDs)

																		if err != nil {	return nil, errors.New("Corrupt V5C_Holder record") }

	v5cIDs.V5Cs = append(v5cIDs.V5Cs, v.V5cID)


	bytes, err = json.Marshal(v5cIDs)

															if err != nil { fmt.Print("Error creating V5C_Holder record") }

	err = stub.PutState("v5cIDs", bytes)

															if err != nil { return nil, errors.New("Unable to put the state") }

	return nil, nil

}

func (t *SimpleChaincode) Update_vehicle_details(stub shim.ChaincodeStubInterface,  vehiclebody string) ([]byte, error) {
	var vold Vehicle
	var vnew Vehicle	
	err := json.Unmarshal([]byte(vehiclebody), &vnew)							// Convert the JSON defined above into a vehicle object for go

			if err != nil { return nil, errors.New("Invalid JSON object") }
																						// If not an error then a record exists so cant create a new car with this V5cID as it must be unique
		
		record, err := stub.GetState(vnew.V5cID)
		 err = json.Unmarshal(record, &vold)
		 if vold.OwnerType == "Manufacturer" {						
			_, err  = t.save_changes(stub, vnew)
																		if err != nil { fmt.Printf("CREATE_VEHICLE: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }
		 }

	return nil, nil

}

func (t *SimpleChaincode) Transfer_vehicle_Ownership(stub shim.ChaincodeStubInterface,  vehiclebody string) ([]byte, error) {
	var vold Vehicle
	var vnew Vehicle	
	fmt.Println(vehiclebody)
	err := json.Unmarshal([]byte(vehiclebody), &vnew)							// Convert the JSON defined above into a vehicle object for go

			if err != nil { return nil, errors.New("Invalid JSON object") }
																						// If not an error then a record exists so cant create a new car with this V5cID as it must be unique
		
		record, err := stub.GetState(vnew.V5cID)
		 err = json.Unmarshal(record, &vold)
		 if vold.OwnerType == "Regulator" {							
			_, err  = t.save_changes(stub, vnew)
																		if err != nil { fmt.Printf("CREATE_VEHICLE: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }
		 }

	return nil, nil

}

//=================================================================================================================================
//	 Read Functions
//=================================================================================================================================
//	 get_vehicle_details
//=================================================================================================================================
func (t *SimpleChaincode) get_vehicle_details(stub shim.ChaincodeStubInterface, v Vehicle) ([]byte, error) {

	bytes, err := json.Marshal(v)

																if err != nil { return nil, errors.New("GET_VEHICLE_DETAILS: Invalid vehicle object") }
					return bytes, nil

}

//=================================================================================================================================
//	 get_vehicle_details for all vehicles
//=================================================================================================================================
func (t *SimpleChaincode) get_all_vehicle_details(stub shim.ChaincodeStubInterface, v Vehicle) ([]byte, error) {

	bytes, err := json.Marshal(v)

																if err != nil { return nil, errors.New("GET_VEHICLE_DETAILS: Invalid vehicle object") }
/*
	if 		v.OwnerName				== caller		||
			caller_affiliation	== AUTHORITY	{

					return bytes, nil
	} else {
																return nil, errors.New("Permission Denied. get_vehicle_details")
	}*/
	return bytes, nil
}



func (t *SimpleChaincode) get_specific_vehicle_details(stub shim.ChaincodeStubInterface, v Vehicle, args []string) ([]byte, error) {

	bytes, err := json.Marshal(v)

																if err != nil { return nil, errors.New("GET_VEHICLE_DETAILS: Invalid vehicle object") }

	if 	v.OwnerType == args[0]	{

					return bytes, nil
	} else {
																return nil, errors.New("Permission Denied. get_vehicle_details")
	}

}

//=================================================================================================================================
//	 get_vehicles
//=================================================================================================================================

func (t *SimpleChaincode) get_vehicles(stub shim.ChaincodeStubInterface,  args []string ) ([]byte, error) {
	bytes, err := stub.GetState("v5cIDs")

																			if err != nil { return nil, errors.New("Unable to get vins") }

	var v5cIDs V5C_Holder
	//var vins VIN_Holder
	err = json.Unmarshal(bytes, &v5cIDs)

																			if err != nil {	return nil, errors.New("Corrupt VIN_Holder") }

	result := "["

	var temp []byte
	var v Vehicle

	for _, v5c := range v5cIDs.V5Cs {

		v, err = t.retrieve_v5c(stub, v5c)

		if err != nil {return nil, errors.New("Failed to retrieve V5C")}

		temp, err = t.get_specific_vehicle_details(stub, v,args)
		if err == nil {
			result += string(temp) + ","
		}
	}

	if len(result) == 1 {
		result = "[]"
	} else {
		result = result[:len(result)-1] + "]"
	}
	return []byte(result), nil
}


func (t *SimpleChaincode) get_all_vehicles(stub shim.ChaincodeStubInterface) ([]byte, error) {
	bytes, err := stub.GetState("v5cIDs")

																			if err != nil { return nil, errors.New("Unable to get vins") }

	var v5cIDs V5C_Holder
	//var vins VIN_Holder
	err = json.Unmarshal(bytes, &v5cIDs)

																			if err != nil {	return nil, errors.New("Corrupt VIN_Holder") }

	result := "["

	var temp []byte
	var v Vehicle

	for _, v5c := range v5cIDs.V5Cs {

		v, err = t.retrieve_v5c(stub, v5c)

		if err != nil {return nil, errors.New("Failed to retrieve V5C")}

		temp, err = t.get_all_vehicle_details(stub, v, caller, caller_affiliation)
		
		if err == nil {

		result += string(temp) + ","
		}
	}

	if len(result) == 1 {
		result = "[]"
	} else {
		result = result[:len(result)-1] + "]"
	}
	return []byte(result), nil
}

//=================================================================================================================================
//	 check_unique_v5c
//=================================================================================================================================
func (t *SimpleChaincode) check_unique_v5c(stub shim.ChaincodeStubInterface, v5c string) ([]byte, error) {
	_, err := t.retrieve_v5c(stub, v5c)
	if err == nil {
		return []byte("false"), errors.New("V5C is not unique")
	} else {
		return []byte("true"), nil
	}
}

//=================================================================================================================================
//	 Main - main - Starts up the chaincode
//=================================================================================================================================
func main() {

	err := shim.Start(new(SimpleChaincode))

															if err != nil { fmt.Printf("Error starting Chaincode: %s", err) }
}
