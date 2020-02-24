var AWS = require('aws-sdk');

let awsConfig = {
	'region': 'us-east-1',
	'endpoint': 'http://dynamodb.us-east-1.amazonaws.com',
	'accessKeyId': 'AKIAJDNCKLXFA7HBKUEA', 'secretAccessKey': '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'
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function () {

	var params = {
		TableName: 'users',
		Key: {
			'email_id': 'example@gmail.com'
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