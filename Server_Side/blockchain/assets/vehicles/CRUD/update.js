'use strict';
let tracing = require(__dirname + '/../../../../tools/traces/trace.js');
let map_ID = require(__dirname + '/../../../../tools/map_ID/map_ID.js');
let Util = require(__dirname + '/../../../../tools/utils/util');
let Vehicle = require(__dirname + '/../../../../tools/utils/vehicle');

function update(req, res, next, usersToSecurityContext) {
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
    return vehicleData.update(user_id, jsonrequest)
    .then(function (v5c) {
        console.log("*************************");
        console.log("The v5c is " );
        console.log(JSON.stringify(v5c));
        console.log("*************************");
        tracing.create('INFO', 'POST blockchain/assets/updatevehicle', 'Updated vehicle');
        let result = {};
        result.message = 'Creation Confirmed';
        result.v5c = v5c;
        res.end(JSON.stringify(result));
    })
    .catch(function (err) {
        tracing.create('ERROR', 'POST blockchain/assets/updatevehicle', err.stack);
        res.send(JSON.stringify({ 'message': "Update Failed" }));
    });
}

exports.update = update;