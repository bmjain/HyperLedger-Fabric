'use strict';

let update = require(__dirname+'/../../property/update');

exports.update = function(req, res, next, usersToSecurityContext) {
    console.log("inside msrp update.js");
    return update(req, res, next, usersToSecurityContext, 'MSRP');
};
