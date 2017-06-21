'use strict';
// let request = require('request');
// let configFile = require(__dirname+'/../../../../../configurations/configuration.js');
let tracing = require(__dirname+'/../../../../../tools/traces/trace.js');
let map_ID = require(__dirname+'/../../../../../tools/map_ID/map_ID.js');
let Util = require(__dirname+'/../../../../../tools/utils/util');

let user_id;
let securityContext;

let read = function (req,res,next,usersToSecurityContext)
{
    let vin = req.params.vin;

    tracing.create('ENTER', 'GET blockchain/assets/vehicles/vehicle/'+vin, {});
    if(typeof req.cookies.user != 'undefined')
    {
        req.session.user = req.cookies.user;
        req.session.identity = map_ID.user_to_id(req.cookies.user);
    }

    user_id = req.session.identity;
    securityContext = usersToSecurityContext[user_id];

    return Util.queryChaincode(securityContext, 'get_vehicle_details', [ vin ])
    .then(function(data) {
        let car = JSON.parse(data.toString());
        let result = {};
        result.vehicle = car;
        tracing.create('EXIT', 'GET blockchain/assets/vehicles/vehicle/'+vin, result);
        res.send(result.vehicle);
    })
    .catch(function(err) {
        res.status(400);
        tracing.create('ERROR', 'GET blockchain/assets/vehicles/vehicle/'+vin, 'Unable to get vehicle. v5cID: '+ vin);
        let error = {};
        error.message = err;
        error.vin = vin;
        error.error = true;
        tracing.create('ERROR', 'GET blockchain/assets/vehicles/vehicle/'+vin, error);
        res.send(error);
    });
};

exports.read = read;
