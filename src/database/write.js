var AWS = require("aws-sdk");
let awsConfig = {
	"region": "us-east-1",
	"endpoint": "http://dynamodb.us-east-1.amazonaws.com",
	"accessKeyId": "AKIAJDNCKLXFA7HBKUEA", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

	var input = {
		"email_id": "example-1@gmail.com", "created_by": "clientUser", "created_on": new Date().toString(),
		"updated_by": "clientUser", "updated_on": new Date().toString(), "is_deleted": false
	};
	var params = {
		TableName: "users",
		Item: input
	};
	docClient.put(params, function (err, data) {

		if (err) {
			console.log("users::save::error - " + JSON.stringify(err, null, 2));
		} else {
			console.log("users::save::success");
		}
	});
}

save();