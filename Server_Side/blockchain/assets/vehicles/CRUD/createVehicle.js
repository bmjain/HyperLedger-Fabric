'use strict';
let tracing = require(__dirname+'/../../../../tools/traces/trace.js');
let map_ID = require(__dirname+'/../../../../tools/map_ID/map_ID.js');
let Util = require(__dirname+'/../../../../tools/utils/util');
let Vehicle = require(__dirname+'/../../../../tools/utils/vehicle');

function create (req, res, next, usersToSecurityContext) {
    let user_id;

    if(typeof req.cookies.user !== 'undefined')
    {
        req.session.user = req.cookies.user;
        req.session.identity = map_ID.user_to_id(req.cookies.user);
    }
    user_id = "DVLA";

    let vehicleData = new Vehicle(usersToSecurityContext);
    let VIN=newV5cID();
   let request = {
            "VIN": VIN,
            "Make": "Toyota",
            "Model": "Camry",
            "Colour": "Black",
            "Reg": "UNDEFINED",
            "Year": "2018",
            "FuelType": "UNDEFINED",
            "BodyType": "UNDEFINED",
            "StateLicenseNumber": "UNDEFINED",
            "VehicleType": "UNDEFINED",
            "MotorCycleEngineNumber": "UNDEFINED",
            "TransportationUse": false,
            "CommercialVehicle": false,
            "OwnerName": "UNDEFINED",
            "OwnerDL": "UNDEFINED",
            "OwnerDLState": "UNDEFINED",
            "CoOwnerName": "UNDEFINED",
            "CoOwnerDL": "UNDEFINED",
            "CoOwnerDLState": "UNDEFINED",
            "OwnerPhyAddr": "UNDEFINED",
            "OwnerMailAddr": "UNDEFINED",
            "CoOwnerPhyAddr": "UNDEFINED",
            "CoOwnerMailAddr": "UNDEFINED",
            "LegalOwnerName": "UNDEFINED",
            "LegalOwnerPhyAddr": "UNDEFINED",
            "LegalOwnerMailAddr": "UNDEFINED",
            "OdometerReading": 0,
            "VehiclePurchaseDate": "UNDEFINED",
            "VehiclePurchaseType": "UNDEFINED",
            "VehiclePurchaseLocation": "UNDEFINED",
            "VehicleEnteredStateDate": "UNDEFINED",
            "VehicleOperatedStateDate": "UNDEFINED",
            "VehicleCost": 0,
            "VehiclePurchasedFrom": "UNDEFINED",
            "BodyTypeMod": false,
            "SalesTaxPaid": false,
            "SalesTaxAmount": 0,
            "IsMemOfMilitary": false,
            "IsMemOfMilitaryWhenLastLicensed": false,
            "Scrapped": false,
            "Status": 0,
            "V5cID": "UNDEFINED",
            "LeaseContractID": "UNDEFINED",
            "MSRP": 0,
            "SellingPrice": 0,
            "StateTax": 0,
            "State": "UNDEFINED"

        };
    return vehicleData.create(user_id,request)
    .then(function(v5cID) {
        tracing.create('INFO', 'POST blockchain/assets/vehicles', 'Created vehicle');
        let result = {};
        result.message = 'Creation Confirmed';
        result.v5cID = v5cID;
        res.end(JSON.stringify(result));
    })
    .catch(function(err) {
        tracing.create('ERROR', 'POST blockchain/assets/vehicles', err.stack);
        res.send(JSON.stringify({'message':err.stack}));
    });
}

function newV5cID() {
        let numbers = '1234567890';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let v5cID = '';
        for (let i = 0; i < 15; i++) {
            v5cID += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        v5cID = numbers.charAt(Math.floor(Math.random() * numbers.length)) + v5cID;
        v5cID = numbers.charAt(Math.floor(Math.random() * numbers.length)) + v5cID;
        return v5cID;
    }

exports.create = create;
