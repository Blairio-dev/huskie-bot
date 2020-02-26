var AWS = require('aws-sdk');

AWS.config.region = 'eu-west-2';
var creds = new AWS.CognitoIdentityCredentials({
	IdentityPoolId: 'eu-west-2:19050a69-e92d-4b4f-8aee-6fe918b002b5'
});
AWS.config.credentials = creds;

let docClient = new AWS.DynamoDB.DocumentClient();

function remove(question) {

	var params = {
		TableName: 'HuskieBotQueries',
		Key: {
			'Question': question
		}
	};
	docClient.delete(params, function (err, data) {

		if (err) {
			console.log('users::delete::error - ' + JSON.stringify(err, null, 2));
		} else {
			console.log('users::delete::success');
		}
	});
}

remove();