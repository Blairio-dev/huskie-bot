var AWS = require('aws-sdk');

AWS.config.update({ region: 'eu-west-2' });

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