var tessel = require('tessel');

// set led pin output w initial state
var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

setInterval( function() {
	console.log( "I'm blinking!" )
	led1.toggle();
	led2.toggle();
}, 200);
