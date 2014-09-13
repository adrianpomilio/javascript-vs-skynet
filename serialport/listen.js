var serialport = require ('serialport');
var SerialPort = serialport.SerialPort;

var myserial = new SerialPort('/dev/cu.usbmodem1411',
		{
			baudrate: 9600,
			parser: serialport.parsers.readline('\n')
		}
	);

myserial.on( 'data' , function( data ) {
	console.log('hello')
	var str = new String(data);

	if(str != ''){
		console.log( data );
	}

});
