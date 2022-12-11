const AWS = require("aws-sdk")

const dynamoDB = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

/**
 * 
 * @param {tableName,primaryKey,sortKey} payload 
 */
//Primary key shoud be the id of the document need to be generated
//primaryKey format 106a26a-21bb-5538-8bf2-57095d1976c1
function createTable(payload) {
    let msg =""
    var params = {
        TableName: payload.tableName,
        KeySchema: [
            { AttributeName: payload.primaryKey, KeyType: "HASH" },
            { AttributeName: payload.sortKey, KeyType: "RANGE" }
        ],
        AttributeDefinitions: [
            { AttributeName: payload.primaryKey, AttributeType: "S" },
            { AttributeName: payload.sortKey, AttributeType: "S" },

        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 10,
            WriteCapacityUnits: 10
        }
    }
    dynamoDB.createTable(params, (err, data) => {
        if (err) {
            msg= err.message
        } else {
            msg= "Table created successfully"
            
        }
    })
    return msg
}


module.exports = { createTable }