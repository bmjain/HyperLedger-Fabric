'use strict';
let tracing = require(__dirname + '/../../../../tools/traces/trace.js');
let map_ID = require(__dirname + '/../../../../tools/map_ID/map_ID.js');
let Util = require(__dirname + '/../../../../tools/utils/util');
let Vehicle = require(__dirname + '/../../../../tools/utils/vehicle');

function create(req, res, next, usersToSecurityContext) {
    let user_id;
    let counter = 1;
    if (typeof req.cookies.user !== 'undefined') {
        req.session.user = req.cookies.user;
        req.session.identity = map_ID.user_to_id(req.cookies.user);
    }
    let jsonrequest = {};
    if (req.body.identity) {
        user_id = req.body.identity;
        counter = req.body.counter;
        delete req.body.identity;
        delete req.body.counter;
        jsonrequest = req.body
    }
    else {
        user_id = req.session.identity;
    }


    let vehicleData = new Vehicle(usersToSecurityContext);
    //sample JSON

    var promises = [];
    for (var i = 0; i < counter; i++) {
        promises.push(asyncrequest(vehicleData, user_id, jsonrequest));
    }
    Promise.all(promises)
        .then((results) => {
          //  console.log("All done", results);
            let result = {};
            result.message = 'Creation Confirmed';
            result.v5cs = results;
            res.end(JSON.stringify(result));
        })
        .catch((e) => {
            // Handle errors here
        });
}
function asyncrequest(vehicleData, user_id, jsonrequest) {
   // console.log("Inside this function");
    return new Promise((resolve, reject) => {
        vehicleData.create(user_id, jsonrequest)
            .then(function (v5c) {
            //    console.log("*************************");
             //   console.log("The v5c is ");
              //  console.log(JSON.stringify(v5c));
              //  console.log("*************************");
                //  tracing.create('INFO', 'POST blockchain/assets/vehicles', 'Created vehicle');
                resolve(v5c);

            })
            .catch(function (err) {
                //  tracing.create('ERROR', 'POST blockchain/assets/vehicles', err.stack);
                reject("error");
                //res.send(JSON.stringify({ 'message': "VIN Number already exist in the database" }));
            });
    });
}


exports.create = create;
