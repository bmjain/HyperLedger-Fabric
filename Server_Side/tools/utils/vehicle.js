'use strict';

const Util = require('./util.js');
const hfc = require('hfc');
var Rx = require('rxjs/Rx');

class Vehicle {

    constructor(usersToSecurityContext) {
        this.usersToSecurityContext = usersToSecurityContext;
        this.chain = hfc.getChain('myChain'); //TODO: Make this a config param?
    }

    create(userId, request) {
        let securityContext = this.usersToSecurityContext[userId];
        // for(var i=0;i<counter;i++)
        // {

        return new Promise((resolve, reject) => {
            this.doesV5CExist(userId, Vehicle.newV5cID(),request).then((data) => {
                //request.V5cID = data.id;
             //     console.log("*************");
               //     console.log(JSON.stringify(data.answer));
                //    console.log("*************");
                Util.invokeChaincode(securityContext, 'create_vehicle', [JSON.stringify(data.answer)]).then(() => {
                  //  console.log("Succesffull completion of invoke chain code");
                   
                })
                 resolve(data.answer.V5cID);
            })
        })


        /* var promise = new Promise(function (resolve, reject) {
             this.doesV5CExist(userId, v5cID)
                 .then(function () {
                      Util.invokeChaincode(securityContext, 'create_vehicle', [JSON.stringify(request)])
                         .then(function () {
                             console.log("*************");
                             console.log(request);
                             console.log("*************");
                             console.log(JSON.stringify(request));
                             console.log("*************");
                            // resolve( request.V5cID);
                         });
                         resolve( v5cID);
                 })
                 .catch(function () {
                    // return "Duplicate v5cID";
                 });
         });
         return promise;*/


    }

    update(userId, request) {
        let securityContext = this.usersToSecurityContext[userId];
        return Util.invokeChaincode(securityContext, 'Update_vehicle_details', [JSON.stringify(request)])
            .then(function () {
             //   console.log("*************");
              //  console.log(request);
              //  console.log("*************");
              //  console.log(JSON.stringify(request));
              //  console.log("*************");
                return request.V5cID;
            });
    }
    transfer(userId, request) {
        let securityContext = this.usersToSecurityContext[userId];
        return Util.invokeChaincode(securityContext, 'Transfer_vehicle_Ownership', [JSON.stringify(request)])
            .then(function () {
            //    console.log("*************");
             //   console.log(request);
             //   console.log("*************");
              //  console.log(JSON.stringify(request));
              //  console.log("*************");
                return request.V5cID;
            });
    }

    transfer1(userId, buyer, functionName, vin) {
        //    return 'undefined';
        return this.updateAttribute(userId, functionName, buyer, "noval", vin);
    }

    updateAttribute(userId, functionName, value, value1, vin) {
       // console.log(" the value is " + value1);
        let securityContext = this.usersToSecurityContext[userId];
        return Util.invokeChaincode(securityContext, functionName, [value, vin, value1]);
    }

    doesV5CExist(userId, v5cID,request) {
        let securityContext = this.usersToSecurityContext[userId];
        return Util.queryChaincode(securityContext, 'check_unique_v5c', [v5cID],request);
    }

    static newV5cID() {
        let numbers = '1234567890';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let v5cID = '';
        for (let i = 0; i < 7; i++) {
            v5cID += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        v5cID = characters.charAt(Math.floor(Math.random() * characters.length)) + v5cID;
        v5cID = characters.charAt(Math.floor(Math.random() * characters.length)) + v5cID;
        return v5cID;
    }
}

module.exports = Vehicle;
