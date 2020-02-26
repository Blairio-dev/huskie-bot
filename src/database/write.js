var AWS = require('aws-sdk');

AWS.config.region = 'eu-west-2';
var creds = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: 'eu-west-2:19050a69-e92d-4b4f-8aee-6fe918b002b5'
});
AWS.config.credentials = creds;

let docClient = new AWS.DynamoDB.DocumentClient();

function save(question, answer) {

	var input = {
		'Question': question, 'Answer': answer, 'created_on': new Date().toString(),
		'updated_by': 'clientUser', 'updated_on': new Date().toString(), 'is_deleted': false
	};
	var params = {
		TableName: 'HuskieBotQueries',
		Item: input
	};
	docClient.put(params, function (err, data) {

		// if (err) {
		// 	console.log('users::save::error - ' + JSON.stringify(err, null, 2));
		// } else {
		// 	console.log('users::save::success');
		// }
	});
}

export { save };