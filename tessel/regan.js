"use-strict"
var sys = require('sys');
var exec = require('child_process').exec;
var twilioKeys = require('../apikeys/twilio');

//require the Twilio module and create a REST client
var client = require('twilio')(twilioKeys.sid, twilioKeys.authToken);


client.messages.create({
    to: "9196560380",
    from: "+19198270744",
    body: "I'm not Regan."
}, function(err, message) {
    console.log(message);
    console.log(err);
});

// use cmd line to run tessel run command

function puts(error, stdout, stderr) {
    sys.puts(stdout);
}

exec("tessel run servo.js", puts);