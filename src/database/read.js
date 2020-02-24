var AWS = require('aws-sdk');
let awsConfig = {
	'region': 'eu-west-2',
	'endpoint': 'http://dynamodb.eu-west-2.amazonaws.com',
	'accessKeyId': 'AKIAJIOSFPBDGDU7S5XA', 'secretAccessKey': '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'
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
	var params = {
		TableName: 'users',
		Key: {
			'email_id': 'huskie.boy@gmail.com'
		}
	};
	docClient.get(params, function (err, data) {
		if (err) {
			console.log('users::fetchOneByKey::error - ' + JSON.stringify(err, null, 2));
		}
		else {
			console.log('users::fetchOneByKey::success - ' + JSON.stringify(data, null, 2));
		}
	})
}


fetchOneByKey();