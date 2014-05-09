// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '609964575759943', // your App ID
		'clientSecret' 	: '46896554f68ff16d48599f953f970624', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'eFD5ihKHHqnFlaaMHC5V7qxr1',
		'consumerSecret' 	: 'W4HQF1C9vC2cOrhxcfDfUO5g2u90x14D6c715dLpybetUcqNq0',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: '1072220064449-a7qjcptgjjt59jl98335l3ehqaso6qvu.apps.googleusercontent.com',
		'clientSecret' 	: '2Yzgd0qORf-cenW0l8o4i8sg',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};
