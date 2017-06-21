'use strict';
let tracing = require(__dirname + '/../../../../tools/traces/trace.js');
let map_ID = require(__dirname + '/../../../../tools/map_ID/map_ID.js');
let Util = require(__dirname + '/../../../../tools/utils/util');
let Vehicle = require(__dirname + '/../../../../tools/utils/vehicle');

function transfer(req, res, next, usersToSecurityContext) {
    let user_id;
    if (typeof req.cookies.user !== 'undefined') {
        req.session.user = req.cookies.user;
        req.session.identity = map_ID.user_to_id(req.cookies.user);
    }
    let jsonrequest = {};
    if (req.body.identity) {
        user_id = req.body.identity;
        delete req.body.identity;
        jsonrequest = req.body
    }
    


    let vehicleData = new Vehicle(usersToSecurityContext);
    //sample JSON
    var arr = []
    return vehicleData.transfer(user_id, jsonrequest)
    .then(function (v5c) {
        console.log("*************************");
        console.log("The v5c is " );
        console.log(JSON.stringify(v5c));
        console.log("*************************");
        tracing.create('INFO', 'POST blockchain/assets/transfervehicle', 'Transferred vehicle');
        let result = {};
        result.message = 'Transfer Confirmed';
        result.v5c = v5c;
        res.end(JSON.stringify(result));
    })
    .catch(function (err) {
        tracing.create('ERROR', 'POST blockchain/assets/transfervehicle', err.stack);
        res.send(JSON.stringify({ 'message': "Transfer Failed" }));
    });
}

exports.transfer = transfer;