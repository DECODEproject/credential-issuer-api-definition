'use strict';

const { respondWithCode } = require('../utils/writer');

/**
 * Issues a wallet credential for the provided DNI
 *
 * body IssueCredentialRequest User DNI to issue a credential for
 * returns IssueCredentialResponse
 **/
exports.issueCredential = function(body) {
  return new Promise((resolve, reject) => {
    if (body.dni === 'invalid') {
      reject(respondWithCode(403, { error: "The specified ID is not valid" }))
    } else if (body.dni === '500') {
      reject(respondWithCode(500, { error: "There was an error while issuing the credential" }))
    } else {
      resolve({ "credential" : "123456789" });
    }
  });
}
