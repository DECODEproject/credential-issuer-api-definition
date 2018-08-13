'use strict';


/**
 * Issues a wallet credential for the provided DNI
 *
 * body IssueCredentialRequest User DNI to issue a credential for
 * returns IssueCredentialResponse
 **/
exports.issueCredential = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "credential" : "1234567890"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

