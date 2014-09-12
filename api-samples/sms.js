var twilioKeys = require('../apikeys/twilio');

//require the Twilio module and create a REST client
var client = require('twilio')(twilioKeys.sid, twilioKeys.authToken);


client.messages.create({
    to: "9196560380",
    from: "+19198270744",
    body: "testing",
}, function(err, message) {
    console.log(message.sid);
});