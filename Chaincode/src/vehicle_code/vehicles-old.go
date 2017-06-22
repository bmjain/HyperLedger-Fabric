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
//	 Participant types - Each participant type is mapped to an integer which we use to compare to the value stored in a
//						 user's eCert
//==============================================================================================================================
//CURRENT WORKAROUND USES ROLES CHANGE WHEN OWN USERS CAN BE CREATED SO THAT IT READ 1, 2, 3, 4, 5
const   AUTHORITY      =  "regulator"
const   MANUFACTURER   =  "manufacturer"
const   PRIVATE_ENTITY =  "private"
const   LEASE_COMPANY  =  "lease_company"
const   SCRAP_MERCHANT =  "scrap_merchant"


//==============================================================================================================================
//	 Status types - Asset lifecycle is broken down into 5 statuses, this is part of the business logic to determine what can
//					be done to the vehicle at points in it's lifecycle
//==============================================================================================================================
const   STATE_TEMPLATE  			=  0
const   STATE_MANUFACTURE  			=  1
const   STATE_PRIVATE_OWNERSHIP 	=  2
const   STATE_LEASED_OUT 			=  3
const   STATE_BEING_SCRAPPED  		=  4

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
type Vehicle struct {
	VIN            					string     `json:"vin"`
	Make            				string  `json:"make"`
	Model           				string  `json:"model"`
	Colour          				string  `json:"colour"`
	Reg             				string  `json:"reg"`
	Year            				string  `json:"year"`
	FuelType						string  `json:"fueltype"`
	BodyType  						string 	`json:"bodytype"`
	StateLicenseNumber 				string  `json:"statelicensenumber"`
	VehicleType						string 	`json:"vehicletype"`
	MotorCycleEngineNumber			string  `json:"motorcycleenginenumber"`
	OwnerName  		         		string	`json:"ownername"`
	OwnerType  		         		string	`json:"ownertype"`
	OdometerReading             	int 	`json:"odometerreading"`
	MSRP 							int     `json:"msrp"`
	SellingPrice 					int     `json:"sellingprice"`
	VehiclePurchasedFrom			string	`json:"vehiclepurchasedfrom"`
	Scrapped        				bool    `json:"scrapped"`
	Status          				int     `json:"status"`
	V5cID           				string  `json:"v5cid"`
	LeaseContractID 				string  `json:"leasecontractid"`
	State           				string  `json:"state"`
	StateTax 						int     `json:"statetax"`
	/*TransportationUse				bool 	`json:"transportationuse"`
	CommercialVehicle				bool	`json:"commercialvehicle"`
	OwnerName  		         		string	`json:"ownername"`
	OwnerDL  		         		string	`json:"ownerdl"`
	OwnerDLState  		        	string	`json:"ownerdlstate"`
	CoOwnerName  		        	string	`json:"coownername"`
	CoOwnerDL  		         		string	`json:"coownerdl"`
	CoOwnerDLState  		    	string	`json:"coownerdlstate"`
	OwnerPhyAddr  		        	string	`json:"ownerphyaddr"`
	OwnerMailAddr  		        	string	`json:"ownermailaddr"`
	CoOwnerPhyAddr  		    	string	`json:"coownerphyaddr"`
	CoOwnerMailAddr  		    	string	`json:"coownermailaddr"`
	LegalOwnerName  		    	string	`json:"legalownername"`
	LegalOwnerPhyAddr  		    	string	`json:"legalownerphyaddr"`
	LegalOwnerMailAddr  	 		string	`json:"legalownermailaddr"`
	OdometerReading             	int 	`json:"odometerreading"`
	VehiclePurchaseDate				string  `json:"vehiclepurchasedate"`
	VehiclePurchaseType				string  `json:"vehiclepurchasetype"`
	VehiclePurchaseLocation			string  `json:"vehiclepurchaselocation"`
	VehicleEnteredStateDate			string 	`json:"vehicleenteredstatedate"`
	VehicleOperatedStateDate		string 	`json:"vehicleoperatedstatedate"`
	VehicleCost						int		`json:"vehiclecost"`
	VehiclePurchasedFrom			string	`json:"vehiclepurchasedfrom"`
	BodyTypeMod						bool	`json:"bodytypemod"`
	SalesTaxPaid					bool	`json:"salestaxpaid"`
	SalesTaxAmount					int		`json:"salestaxamount"`
	IsMemOfMilitary					bool	`json:"ismemofmilitary"`
	IsMemOfMilitaryWhenLastLicensed	bool    `json:"ismemofmilitarywhenlastlicensed"`
	Scrapped        				bool    `json:"scrapped"`
	Status          				int     `json:"status"`
	V5cID           				string  `json:"v5cID"`
	LeaseContractID 				string  `json:"leaseContractID"`
	MSRP 							int     `json:"MSRP"`
	SellingPrice 					int     `json:"sellingprice"`
	StateTax 						int     `json:"statetax"`
	State           				string  `json:"state"`*/
}


//==============================================================================================================================
//	V5C Holder - Defines the structure that holds all the v5cIDs for vehicles that have been created.
//				Used as an index when querying all vehicles.
//==============================================================================================================================

type V5C_Holder struct {
	V5Cs 	[]string `json:"v5cs"`
}

/*type VIN_Holder struct {
	VINs 	[]string `json:"vins"`
}*/

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

	//Args
	//				0
	//			peer_address

	var v5cIDs V5C_Holder
	//var vins VIN_Holder

	bytes, err := json.Marshal(v5cIDs)
//	bytes, err := json.Marshal(vins)

    if err != nil { return nil, errors.New("Error creating V5C_Holder record") }
	//if err != nil { return nil, errors.New("Error creating VIN_Holder record") }
	err = stub.PutState("v5cIDs", bytes)
	//err = stub.PutState("vins", bytes)

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
//	 get_caller - Retrieves the username of the user who invoked the chaincode.
//				  Returns the username as a string.
//==============================================================================================================================

func (t *SimpleChaincode) get_username(stub shim.ChaincodeStubInterface) (string, error) {

    username, err := stub.ReadCertAttribute("username");
	if err != nil { return "", errors.New("Couldn't get attribute 'username'. Error: " + err.Error()) }
	return string(username), nil
}

//==============================================================================================================================
//	 check_affiliation - Takes an ecert as a string, decodes it to remove html encoding then parses it and checks the
// 				  		certificates common name. The affiliation is stored as part of the common name.
//==============================================================================================================================

func (t *SimpleChaincode) check_affiliation(stub shim.ChaincodeStubInterface) (string, error) {
    affiliation, err := stub.ReadCertAttribute("role");
	if err != nil { return "", errors.New("Couldn't get attribute 'role'. Error: " + err.Error()) }
	return string(affiliation), nil

}

//==============================================================================================================================
//	 get_caller_data - Calls the get_ecert and check_role functions and returns the ecert and role for the
//					 name passed.
//==============================================================================================================================

func (t *SimpleChaincode) get_caller_data(stub shim.ChaincodeStubInterface) (string, string, error){

	user, err := t.get_username(stub)

    // if err != nil { return "", "", err }

	// ecert, err := t.get_ecert(stub, user);

    // if err != nil { return "", "", err }

	affiliation, err := t.check_affiliation(stub);

    if err != nil { return "", "", err }

	return user, affiliation, nil
}

//==============================================================================================================================
//	 retrieve_v5c - Gets the state of the data at v5cID in the ledger then converts it from the stored
//					JSON into the Vehicle struct for use in the contract. Returns the Vehcile struct.
//					Returns empty v if it errors.
//==============================================================================================================================
func (t *SimpleChaincode) retrieve_v5c(stub shim.ChaincodeStubInterface, v5cID string) (Vehicle, error) {

	var v Vehicle

	bytes, err := stub.GetState(v5cID);
	fmt.Println("inside retrieve_v5c)");
	fmt.Println(string(bytes));
	if err != nil {	fmt.Printf("RETRIEVE_V5C: Failed to invoke vehicle_code: %s", err); return v, errors.New("RETRIEVE_V5C: Error retrieving vehicle with v5cID = " + v5cID) }

	err = json.Unmarshal(bytes, &v);

    if err != nil {	fmt.Printf("RETRIEVE_V5C: Corrupt vehicle record "+string(bytes)+": %s", err); return v, errors.New("RETRIEVE_V5C: Corrupt vehicle record"+string(bytes))	}

	return v, nil
}

/*func (t *SimpleChaincode) retrieve_vin(stub shim.ChaincodeStubInterface, vin string) (Vehicle, error) {

	var v Vehicle
	fmt.Println("****************JKNHJK****")
	fmt.Println(vin)
	fmt.Println("***************JKNJNK*****")
	bytes, err := stub.GetState(vin);
	fmt.Println("inside retrieve_vin");
	fmt.Println(string(bytes));
	if err != nil {	fmt.Printf("RETRIEVE_VIN: Failed to invoke vehicle_code: %s", err); return v, errors.New("RETRIEVE_VIN: Error retrieving vehicle with vin = " + vin) }

	err = json.Unmarshal(bytes, &v);

    if err != nil {	fmt.Printf("RETRIEVE_VIN: Corrupt vehicle record "+string(bytes)+": %s", err); return v, errors.New("RETRIEVE_VIN: Corrupt vehicle record"+string(bytes))	}

	return v, nil
}*/

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

	caller, caller_affiliation, err := t.get_caller_data(stub)

	if err != nil { return nil, errors.New("Error retrieving caller information")}

	logger.Debug("function: ", function)
    logger.Debug("caller: ", caller)
    logger.Debug("affiliation: ", caller_affiliation)
	fmt.Printf("%v", args)
	if function == "create_vehicle" {
        return t.create_vehicle(stub, caller, caller_affiliation, args[0])
	} else if function == "Update_vehicle_details" {
        return t.Update_vehicle_details(stub, caller, caller_affiliation, args[0])
	} else if function == "Transfer_vehicle_Ownership" {
        return t.Transfer_vehicle_Ownership(stub, caller, caller_affiliation, args[0])
	} else if function == "ping" {
        return t.ping(stub)
    } else { 																				// If the function is not a create then there must be a car so we need to retrieve the car.
		argPos := 1

		if function == "scrap_vehicle" {																// If its a scrap vehicle then only two arguments are passed (no update value) all others have three arguments and the v5cID is expected in the last argument
			argPos = 0
		}

		v, err := t.retrieve_v5c(stub, args[argPos])
		// v, err := t.retrieve_vin(stub, args[argPos])
        if err != nil { fmt.Printf("INVOKE: Error retrieving v5c: %s", err); return nil, errors.New("Error retrieving v5c") }


        if strings.Contains(function, "update") == false && function != "scrap_vehicle"    { 									// If the function is not an update or a scrappage it must be a transfer so we need to get the ecert of the recipient.


				if 		   function == "authority_to_manufacturer" { return t.authority_to_manufacturer(stub, v, caller, caller_affiliation, args[0], "manufacturer")
				} else if  function == "manufacturer_to_private"   { return t.manufacturer_to_private(stub, v, caller, caller_affiliation, args[0], "private")
				} else if  function == "private_to_private" 	   { return t.private_to_private(stub, v, caller, caller_affiliation, args[0],args[2], "private")
				} else if  function == "private_to_lease_company"  { return t.private_to_lease_company(stub, v, caller, caller_affiliation, args[0],args[2], "lease_company")
				} else if  function == "lease_company_to_private"  { return t.lease_company_to_private(stub, v, caller, caller_affiliation, args[0],args[2], "private")
				
				} else if  function == "private_to_scrap_merchant" { return t.private_to_scrap_merchant(stub, v, caller, caller_affiliation, args[0], "scrap_merchant")
				}

		} else if function == "update_make"  	    { return t.update_make(stub, v, caller, caller_affiliation, args[0])
		} else if function == "update_model"        { return t.update_model(stub, v, caller, caller_affiliation, args[0])
		} else if function == "update_year"        { return t.update_year(stub, v, caller, caller_affiliation, args[0])
		} else if function == "update_reg" { return t.update_registration(stub, v, caller, caller_affiliation, args[0])
		} else if function == "update_msrp" { return t.update_msrp(stub, v, caller, caller_affiliation, args[0])
		} else if function == "update_vin" 			{ return t.update_vin(stub, v, caller, caller_affiliation, args[0])
		} else if function == "update_state" { return t.update_state(stub, v, caller, caller_affiliation, args[0])
		} else if function == "update_statetax" { return t.update_statetax(stub, v, caller, caller_affiliation, args[0])
		} else if function == "update_sellingprice" 			{ return t.update_sellingprice(stub, v, caller, caller_affiliation, args[0])
        } else if function == "update_colour" 		{ return t.update_colour(stub, v, caller, caller_affiliation, args[0])
		} else if function == "scrap_vehicle" 		{ return t.scrap_vehicle(stub, v, caller, caller_affiliation) }

		return nil, errors.New("Function of the name "+ function +" doesn't exist.")

	}
}
//=================================================================================================================================
//	Query - Called on chaincode query. Takes a function name passed and calls that function. Passes the
//  		initial arguments passed are passed on to the called function.
//=================================================================================================================================
func (t *SimpleChaincode) Query(stub shim.ChaincodeStubInterface, function string, args []string) ([]byte, error) {

	caller, caller_affiliation, err := t.get_caller_data(stub)
	if err != nil { fmt.Printf("QUERY: Error retrieving caller details", err); return nil, errors.New("QUERY: Error retrieving caller details: "+err.Error()) }

    logger.Debug("function: ", function)
    logger.Debug("caller: ", caller)
    logger.Debug("affiliation: ", caller_affiliation)

	if function == "get_vehicle_details" {
		if len(args) != 1 { fmt.Printf("Incorrect number of arguments passed"); return nil, errors.New("QUERY: Incorrect number of arguments passed") }
		v, err := t.retrieve_v5c(stub, args[0])
		//v, err := t.retrieve_vin(stub, args[0])
		if err != nil { fmt.Printf("QUERY: Error retrieving v5c: %s", err); return nil, errors.New("QUERY: Error retrieving v5c "+err.Error()) }
		return t.get_vehicle_details(stub, v, caller, caller_affiliation)
	} else if function == "check_unique_v5c" {
		return t.check_unique_v5c(stub, args[0], caller, caller_affiliation)
		} else if function == "get_all_vehicles" {
		return t.get_all_vehicles(stub, caller, caller_affiliation)
	} else if function == "get_vehicles" {
		return t.get_vehicles(stub, caller, caller_affiliation,args)
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
/*
func (t *SimpleChaincode) create_vehicle(stub shim.ChaincodeStubInterface, caller string, caller_affiliation string, v5cID string) ([]byte, error) {
	var v Vehicle

	v5c_ID         := "\"v5cID\":\""+v5cID+"\", "							// Variables to define the JSON
	vin            := "\"VIN\":0, "
	msrp            := "\"MSRP\":0, "
	make           := "\"Make\":\"UNDEFINED\", "
	model          := "\"Model\":\"UNDEFINED\", "
	year          := "\"Year\":\"UNDEFINED\", "
	reg            := "\"Reg\":\"UNDEFINED\", "
	state          := "\"State\":\"UNDEFINED\", "
	sellingprice   := "\"SellingPrice\":0, "
	statetax       := "\"StateTax\":0, "
	owner          := "\"Owner\":\""+caller+"\", "
	colour         := "\"Colour\":\"UNDEFINED\", "
	leaseContract  := "\"LeaseContractID\":\"UNDEFINED\", "
	status         := "\"Status\":0, "
	scrapped       := "\"Scrapped\":false"

	vehicle_json := "{"+v5c_ID+vin+msrp+make+model+year+reg+state+sellingprice+statetax+owner+colour+leaseContract+status+scrapped+"}" 	// Concatenates the variables to create the total JSON object

	matched, err := regexp.Match("^[A-z][A-z][0-9]{7}", []byte(v5cID))  				// matched = true if the v5cID passed fits format of two letters followed by seven digits

												if err != nil { fmt.Printf("CREATE_VEHICLE: Invalid v5cID: %s", err); return nil, errors.New("Invalid v5cID") }

	if 				v5c_ID  == "" 	 ||
					matched == false    {
																		fmt.Printf("CREATE_VEHICLE: Invalid v5cID provided");
																		return nil, errors.New("Invalid v5cID provided")
	}

	err = json.Unmarshal([]byte(vehicle_json), &v)							// Convert the JSON defined above into a vehicle object for go

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

	err = json.Unmarshal(bytes, &v5cIDs)

																		if err != nil {	return nil, errors.New("Corrupt V5C_Holder record") }

	v5cIDs.V5Cs = append(v5cIDs.V5Cs, v5cID)


	bytes, err = json.Marshal(v5cIDs)

															if err != nil { fmt.Print("Error creating V5C_Holder record") }

	err = stub.PutState("v5cIDs", bytes)

															if err != nil { return nil, errors.New("Unable to put the state") }

	return nil, nil

}

*/
func (t *SimpleChaincode) create_vehicle(stub shim.ChaincodeStubInterface, caller string, caller_affiliation string, vehiclebody string) ([]byte, error) {
	var v Vehicle

	fmt.Println(vehiclebody)
	err := json.Unmarshal([]byte(vehiclebody), &v)							// Convert the JSON defined above into a vehicle object for go

																		if err != nil { return nil, errors.New("Invalid JSON object") }
	fmt.Println("the value is")
	fmt.Println(v.V5cID)																	
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

func (t *SimpleChaincode) Update_vehicle_details(stub shim.ChaincodeStubInterface, caller string, caller_affiliation string, vehiclebody string) ([]byte, error) {
	var vold Vehicle
	var vnew Vehicle
	//record, err := stub.GetState(v.V5cID) 	
	fmt.Println(vehiclebody)
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

func (t *SimpleChaincode) Transfer_vehicle_Ownership(stub shim.ChaincodeStubInterface, caller string, caller_affiliation string, vehiclebody string) ([]byte, error) {
	var vold Vehicle
	var vnew Vehicle
	//record, err := stub.GetState(v.V5cID) 	
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
//	 Transfer Functions
//=================================================================================================================================
//	 authority_to_manufacturer
//=================================================================================================================================
func (t *SimpleChaincode) authority_to_manufacturer(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, recipient_name string, recipient_affiliation string) ([]byte, error) {

	

	if     	v.Status				== STATE_TEMPLATE	&&
			v.OwnerName					== caller			&&
			caller_affiliation		== AUTHORITY		&&
			recipient_affiliation	== MANUFACTURER		&&
			v.Scrapped				== false			{		// If the roles and users are ok

					v.OwnerName  = recipient_name		// then make the owner the new owner
					v.Status = STATE_MANUFACTURE			// and mark it in the state of manufacture

	} else {									// Otherwise if there is an error
															fmt.Printf("AUTHORITY_TO_MANUFACTURER: Permission Denied");
                                                            return nil, errors.New(fmt.Sprintf("Permission Denied. authority_to_manufacturer. %v %v === %v, %v === %v, %v === %v, %v === %v, %v === %v", v, v.Status, STATE_PRIVATE_OWNERSHIP, v.OwnerName, caller, caller_affiliation, PRIVATE_ENTITY, recipient_affiliation, SCRAP_MERCHANT, v.Scrapped, false))


	}

	_, err := t.save_changes(stub, v)						// Write new state

															if err != nil {	fmt.Printf("AUTHORITY_TO_MANUFACTURER: Error saving changes: %s", err); return nil, errors.New("Error saving changes")	}

	return nil, nil									// We are Done

}

//=================================================================================================================================
//	 manufacturer_to_private
//=================================================================================================================================
func (t *SimpleChaincode) manufacturer_to_private(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, recipient_name string, recipient_affiliation string) ([]byte, error) {

	if 		v.Make 	 == "UNDEFINED" ||
			v.Model  == "UNDEFINED" ||
			v.MSRP 	 == 0 ||
			v.Colour == "UNDEFINED" ||
			v.VIN == "UNDEFINED"				{					//If any part of the car is undefined it has not bene fully manufacturered so cannot be sent
															fmt.Printf("MANUFACTURER_TO_PRIVATE: Car not fully defined")
															return nil, errors.New(fmt.Sprintf("Car not fully defined. %v", v))
	}

	if 		v.Status				== STATE_MANUFACTURE	&&
			v.OwnerName					== caller				&&
			caller_affiliation		== MANUFACTURER			&&
			recipient_affiliation	== PRIVATE_ENTITY		&&
			v.Scrapped     == false							{

					v.OwnerName = recipient_name
					v.Status = STATE_PRIVATE_OWNERSHIP

	} else {
        return nil, errors.New(fmt.Sprintf("Permission Denied. manufacturer_to_private. %v %v === %v, %v === %v, %v === %v, %v === %v, %v === %v", v, v.Status, STATE_PRIVATE_OWNERSHIP, v.OwnerName, caller, caller_affiliation, PRIVATE_ENTITY, recipient_affiliation, SCRAP_MERCHANT, v.Scrapped, false))
    }

	_, err := t.save_changes(stub, v)

	if err != nil { fmt.Printf("MANUFACTURER_TO_PRIVATE: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 private_to_private
//=================================================================================================================================
func (t *SimpleChaincode) private_to_private(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, recipient_name string, recipient_state string,recipient_affiliation string) ([]byte, error) {

	if 		v.Status				== STATE_PRIVATE_OWNERSHIP	&&
			v.OwnerName					== caller					&&
			caller_affiliation		== PRIVATE_ENTITY			&&
			recipient_affiliation	== PRIVATE_ENTITY			&&
			v.Scrapped				== false					{

					v.OwnerName = recipient_name
					v.State=recipient_state

	} else {
        return nil, errors.New(fmt.Sprintf("Permission Denied. private_to_private. %v %v === %v, %v === %v, %v === %v, %v === %v, %v === %v", v, v.Status, STATE_PRIVATE_OWNERSHIP, v.OwnerName, caller, caller_affiliation, PRIVATE_ENTITY, recipient_affiliation, SCRAP_MERCHANT, v.Scrapped, false))
	}

	_, err := t.save_changes(stub, v)

															if err != nil { fmt.Printf("PRIVATE_TO_PRIVATE: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 private_to_lease_company
//=================================================================================================================================
func (t *SimpleChaincode) private_to_lease_company(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, recipient_name string,recipient_state string,recipient_affiliation string) ([]byte, error) {

	if 		v.Status				== STATE_PRIVATE_OWNERSHIP	&&
			v.OwnerName					== caller					&&
			caller_affiliation		== PRIVATE_ENTITY			&&
			recipient_affiliation	== LEASE_COMPANY			&&
            v.Scrapped     			== false					{

					v.OwnerName = recipient_name
					v.State=recipient_state

	} else {
        return nil, errors.New(fmt.Sprintf("Permission denied. private_to_lease_company. %v === %v, %v === %v, %v === %v, %v === %v, %v === %v", v.Status, STATE_PRIVATE_OWNERSHIP, v.OwnerName, caller, caller_affiliation, PRIVATE_ENTITY, recipient_affiliation, SCRAP_MERCHANT, v.Scrapped, false))

	}

	_, err := t.save_changes(stub, v)
															if err != nil { fmt.Printf("PRIVATE_TO_LEASE_COMPANY: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 lease_company_to_private
//=================================================================================================================================
func (t *SimpleChaincode) lease_company_to_private(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, recipient_name string,recipient_state string, recipient_affiliation string) ([]byte, error) {

	if		v.Status				== STATE_PRIVATE_OWNERSHIP	&&
			v.OwnerName  				== caller					&&
			caller_affiliation		== LEASE_COMPANY			&&
			recipient_affiliation	== PRIVATE_ENTITY			&&
			v.Scrapped				== false					{

				v.OwnerName = recipient_name
				v.State=recipient_state

	} else {
		return nil, errors.New(fmt.Sprintf("Permission Denied. lease_company_to_private. %v %v === %v, %v === %v, %v === %v, %v === %v, %v === %v", v, v.Status, STATE_PRIVATE_OWNERSHIP, v.OwnerName, caller, caller_affiliation, PRIVATE_ENTITY, recipient_affiliation, SCRAP_MERCHANT, v.Scrapped, false))
	}

	_, err := t.save_changes(stub, v)
															if err != nil { fmt.Printf("LEASE_COMPANY_TO_PRIVATE: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 private_to_scrap_merchant
//=================================================================================================================================
func (t *SimpleChaincode) private_to_scrap_merchant(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, recipient_name string, recipient_affiliation string) ([]byte, error) {

	if		v.Status				== STATE_PRIVATE_OWNERSHIP	&&
			v.OwnerName					== caller					&&
			caller_affiliation		== PRIVATE_ENTITY			&&
			recipient_affiliation	== SCRAP_MERCHANT			&&
			v.Scrapped				== false					{

					v.OwnerName = recipient_name
					v.Status = STATE_BEING_SCRAPPED

	} else {
        return nil, errors.New(fmt.Sprintf("Permission Denied. private_to_scrap_merchant. %v %v === %v, %v === %v, %v === %v, %v === %v, %v === %v", v, v.Status, STATE_PRIVATE_OWNERSHIP, v.OwnerName, caller, caller_affiliation, PRIVATE_ENTITY, recipient_affiliation, SCRAP_MERCHANT, v.Scrapped, false))
	}

	_, err := t.save_changes(stub, v)

															if err != nil { fmt.Printf("PRIVATE_TO_SCRAP_MERCHANT: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 Update Functions
//=================================================================================================================================
//	 update_vin
//=================================================================================================================================
func (t *SimpleChaincode) update_vin(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, new_value string) ([]byte, error) {

	//new_vin, err := strconv.Atoi(string(new_value)) 		                // will return an error if the new vin contains non numerical chars

														//	if err != nil || len(string(new_value)) != 15 { return nil, errors.New("Invalid value passed for new VIN") }

	if 		v.Status			== STATE_MANUFACTURE	&&
			v.OwnerName				== caller				&&
			caller_affiliation	== MANUFACTURER			&&
			//v.VIN				== 0					&&			// Can't change the VIN after its initial assignment
			v.Scrapped			== false				{

					v.VIN = new_value					// Update to the new value
	} else {

        return nil, errors.New(fmt.Sprintf("Permission denied. update_vin %v %v %v %v %v", v.Status, STATE_MANUFACTURE, v.OwnerName, caller, v.VIN, v.Scrapped))

	}

	_, err  := t.save_changes(stub, v)						// Save the changes in the blockchain

															if err != nil { fmt.Printf("UPDATE_VIN: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//	 update_msrp
//=================================================================================================================================
func (t *SimpleChaincode) update_msrp(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, new_value string) ([]byte, error) {

	new_msrp, err := strconv.Atoi(string(new_value)) 		                // will return an error if the new vin contains non numerical chars
	//logger.Debug(new_value)
	//logger.Debug(new_msrp)
	 fmt.Println(string(new_msrp));
															if err != nil  { return nil, errors.New("Invalid value passed for new msrp") }

	if 		v.Status			== STATE_MANUFACTURE	&&
			v.OwnerName				== caller				&&
			caller_affiliation	== MANUFACTURER			&&			
			v.Scrapped			== false				{
	//			logger.Debug("inside if")
					v.MSRP = new_msrp					// Update to the new value
	} else {

        return nil, errors.New(fmt.Sprintf("Permission denied. update_msrp %v %v %v %v %v", v.Status, STATE_MANUFACTURE, v.OwnerName, caller, v.MSRP, v.Scrapped))

	}
	 fmt.Println("hello world")
	  fmt.Println(v)
	_, err  = t.save_changes(stub, v)						// Save the changes in the blockchain
	//logger.Debug(_)

															if err != nil { fmt.Printf("UPDATE_MSRP: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}


//	 update_statetax
//=================================================================================================================================
func (t *SimpleChaincode) update_statetax(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, new_value string) ([]byte, error) {

	new_statetax, err := strconv.Atoi(string(new_value)) 		                // will return an error if the new vin contains non numerical chars
	//logger.Debug(new_value)
	//logger.Debug(new_msrp)
															if err != nil  { return nil, errors.New("Invalid value passed for new msrp") }

	if 		v.Status			== STATE_MANUFACTURE	&&
			v.OwnerName				== caller				&&
			caller_affiliation	== MANUFACTURER			&&
			v.StateTax				== 0					&&			// Can't change the VIN after its initial assignment
			v.Scrapped			== false				{
	//			logger.Debug("inside if")
					v.StateTax = new_statetax					// Update to the new value
	} else {

        return nil, errors.New(fmt.Sprintf("Permission denied. update_msrp %v %v %v %v %v", v.Status, STATE_MANUFACTURE, v.OwnerName, caller, v.MSRP, v.Scrapped))

	}

	_, err  = t.save_changes(stub, v)						// Save the changes in the blockchain
	//logger.Debug(_)

															if err != nil { fmt.Printf("UPDATE_MSRP: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}


//	 update_sellingprice
//=================================================================================================================================
func (t *SimpleChaincode) update_sellingprice(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, new_value string) ([]byte, error) {

	new_sp, err := strconv.Atoi(string(new_value)) 		                // will return an error if the new vin contains non numerical chars
	//logger.Debug(new_value)
	//logger.Debug(new_msrp)
															if err != nil  { return nil, errors.New("Invalid value passed for new msrp") }

	if 		v.Status			== STATE_MANUFACTURE	&&
			v.OwnerName				== caller				&&
			caller_affiliation	== MANUFACTURER			&&
			v.SellingPrice				== 0					&&			// Can't change the VIN after its initial assignment
			v.Scrapped			== false				{
	//			logger.Debug("inside if")
					v.SellingPrice = new_sp					// Update to the new value
	} else {

        return nil, errors.New(fmt.Sprintf("Permission denied. update_msrp %v %v %v %v %v", v.Status, STATE_MANUFACTURE, v.OwnerName, caller, v.MSRP, v.Scrapped))

	}

	_, err  = t.save_changes(stub, v)						// Save the changes in the blockchain
	//logger.Debug(_)

															if err != nil { fmt.Printf("UPDATE_MSRP: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}






//=================================================================================================================================
//	 update_registration
//=================================================================================================================================
func (t *SimpleChaincode) update_registration(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, new_value string) ([]byte, error) {


	if		v.OwnerName				== caller			&&
			caller_affiliation	!= SCRAP_MERCHANT	&&
			v.Scrapped			== false			{

					v.Reg = new_value

	} else {
        return nil, errors.New(fmt.Sprint("Permission denied. update_registration"))
	}

	_, err := t.save_changes(stub, v)

															if err != nil { fmt.Printf("UPDATE_REGISTRATION: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 update_colour
//=================================================================================================================================
func (t *SimpleChaincode) update_colour(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, new_value string) ([]byte, error) {

	if 		v.OwnerName				== caller				&&
			caller_affiliation	== MANUFACTURER			&&/*((v.OwnerName				== caller			&&
			caller_affiliation	== MANUFACTURER)		||
			caller_affiliation	== AUTHORITY)			&&*/
			v.Scrapped			== false				{

					v.Colour = new_value
	} else {

		return nil, errors.New(fmt.Sprint("Permission denied. update_colour %t %t %t" + v.OwnerName == caller, caller_affiliation == MANUFACTURER, v.Scrapped))
	}

	_, err := t.save_changes(stub, v)

		if err != nil { fmt.Printf("UPDATE_COLOUR: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 update_make
//=================================================================================================================================
func (t *SimpleChaincode) update_make(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, new_value string) ([]byte, error) {

	if 		v.Status			== STATE_MANUFACTURE	&&
			v.OwnerName				== caller				&&
			caller_affiliation	== MANUFACTURER			&&
			v.Scrapped			== false				{

					v.Make = new_value
	} else {

        return nil, errors.New(fmt.Sprint("Permission denied. update_make %t %t %t" + v.OwnerName == caller, caller_affiliation == MANUFACTURER, v.Scrapped))


	}

	_, err := t.save_changes(stub, v)

															if err != nil { fmt.Printf("UPDATE_MAKE: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

func (t *SimpleChaincode) update_year(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, new_value string) ([]byte, error) {

	if 		v.Status			== STATE_MANUFACTURE	&&
			v.OwnerName				== caller				&&
			caller_affiliation	== MANUFACTURER			&&
			v.Scrapped			== false				{

					v.Year = new_value
	} else {

        return nil, errors.New(fmt.Sprint("Permission denied. update_make %t %t %t" + v.OwnerName == caller, caller_affiliation == MANUFACTURER, v.Scrapped))


	}

	_, err := t.save_changes(stub, v)

															if err != nil { fmt.Printf("UPDATE_MAKE: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 update_model
//=================================================================================================================================
func (t *SimpleChaincode) update_model(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, new_value string) ([]byte, error) {

	if 		v.Status			== STATE_MANUFACTURE	&&
			v.OwnerName				== caller				&&
			caller_affiliation	== MANUFACTURER			&&
			v.Scrapped			== false				{

					v.Model = new_value

	} else {
        return nil, errors.New(fmt.Sprint("Permission denied. update_model %t %t %t" + v.OwnerName == caller, caller_affiliation == MANUFACTURER, v.Scrapped))

	}

	_, err := t.save_changes(stub, v)

															if err != nil { fmt.Printf("UPDATE_MODEL: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 update_state
//=================================================================================================================================
func (t *SimpleChaincode) update_state(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string, new_value string) ([]byte, error) {

	if 		v.Status			== STATE_MANUFACTURE	&&
			v.OwnerName				== caller				&&
			caller_affiliation	== MANUFACTURER			&&
			v.Scrapped			== false				{

					v.State = new_value

	} else {
        return nil, errors.New(fmt.Sprint("Permission denied. update_model %t %t %t" + v.OwnerName == caller, caller_affiliation == MANUFACTURER, v.Scrapped))

	}

	_, err := t.save_changes(stub, v)

															if err != nil { fmt.Printf("UPDATE_MODEL: Error saving changes: %s", err); return nil, errors.New("Error saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 scrap_vehicle
//=================================================================================================================================
func (t *SimpleChaincode) scrap_vehicle(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string) ([]byte, error) {

	if		v.Status			== STATE_BEING_SCRAPPED	&&
			v.OwnerName				== caller				&&
			caller_affiliation	== SCRAP_MERCHANT		&&
			v.Scrapped			== false				{

					v.Scrapped = true

	} else {
		return nil, errors.New("Permission denied. scrap_vehicle")
	}

	_, err := t.save_changes(stub, v)

															if err != nil { fmt.Printf("SCRAP_VEHICLE: Error saving changes: %s", err); return nil, errors.New("SCRAP_VEHICLError saving changes") }

	return nil, nil

}

//=================================================================================================================================
//	 Read Functions
//=================================================================================================================================
//	 get_vehicle_details
//=================================================================================================================================
func (t *SimpleChaincode) get_vehicle_details(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string) ([]byte, error) {

	bytes, err := json.Marshal(v)

																if err != nil { return nil, errors.New("GET_VEHICLE_DETAILS: Invalid vehicle object") }

	if 		v.OwnerName				== caller		||
			caller_affiliation	== AUTHORITY	{

					return bytes, nil
	} else {
																return nil, errors.New("Permission Denied. get_vehicle_details")
	}

}

//=================================================================================================================================
//	 get_vehicle_details for all vehicles
//=================================================================================================================================
func (t *SimpleChaincode) get_all_vehicle_details(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string) ([]byte, error) {

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



func (t *SimpleChaincode) get_specific_vehicle_details(stub shim.ChaincodeStubInterface, v Vehicle, caller string, caller_affiliation string,args []string) ([]byte, error) {

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

func (t *SimpleChaincode) get_vehicles(stub shim.ChaincodeStubInterface, caller string, caller_affiliation string, args []string ) ([]byte, error) {
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

		temp, err = t.get_specific_vehicle_details(stub, v, caller, caller_affiliation,args)
		fmt.Println(string(temp));
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


func (t *SimpleChaincode) get_all_vehicles(stub shim.ChaincodeStubInterface, caller string, caller_affiliation string ) ([]byte, error) {
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

		fmt.Println("***************************");
		fmt.Println(string(temp));
		fmt.Println("***************************");
		result += string(temp) + ","
		} else {
			fmt.Println("*********ERRR******************");

		fmt.Println(string(temp));
		fmt.Println("************ERRR***************");
		}
	}

	if len(result) == 1 {
		result = "[]"
	} else {
		result = result[:len(result)-1] + "]"
	}
		fmt.Println("*************RESULT**************");
	fmt.Println(result);
		fmt.Println("*************RESULT**************");
	return []byte(result), nil
}

//=================================================================================================================================
//	 check_unique_v5c
//=================================================================================================================================
func (t *SimpleChaincode) check_unique_v5c(stub shim.ChaincodeStubInterface, v5c string, caller string, caller_affiliation string) ([]byte, error) {
	_, err := t.retrieve_v5c(stub, v5c)
	if err == nil {
		return []byte("false"), errors.New("V5C is not unique")
	} else {
		return []byte("true"), nil
	}
}


//=================================================================================================================================
//	 check_unique_vin
//=================================================================================================================================
/*func (t *SimpleChaincode) check_unique_vin(stub shim.ChaincodeStubInterface, vin string, caller string, caller_affiliation string) ([]byte, error) {
	_, err := t.retrieve_vin(stub, vin)
	if err == nil {
		return []byte("false"), errors.New("VIN is not unique")
	} else {
		return []byte("true"), nil
	}
}
*/
//=================================================================================================================================
//	 Main - main - Starts up the chaincode
//=================================================================================================================================
func main() {

	err := shim.Start(new(SimpleChaincode))

															if err != nil { fmt.Printf("Error starting Chaincode: %s", err) }
}
