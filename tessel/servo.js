"use-strict"

var tessel = require('tessel');
var servolib = require('servo-pca9685');

var servo = servolib.use(tessel.port['B']); // make sure to adjust the port depending on your plugin

var servos = [1]; // Array for multiple servos

//servo.on('ready', function () {
//    var position = 0;  //  Target position of the servo between 0 (min) and 1 (max).
//
//    //  Set the minimum and maximum duty cycle for servo 1.
//    //  If the servo doesn't move to its full extent or stalls out
//    //  and gets hot, try tuning these values (0.05 and 0.12).
//    //  Moving them towards each other = less movement range
//    //  Moving them apart = more range, more likely to stall and burn out
//    servo.configure(servo1, 0.05, 0.12, function () {
//
//        servo.move(servo1, position);
//        setInterval(function () {
//            console.log('Position (in range 0-1):', position);
//            //  Set servo #1 to position pos.
//            servo.move(servo1, position);
//
//            // Increment by 10% (~18 deg for a normal servo)
//            position += 0.3;
//            if (position > 1) {
//                position = 0; // Reset servo position
//            }
//        }, 200); // Every 500 milliseconds
//    });
//});

servo.on('ready', function () {
    var count = 0;
    var total = servos.length;
    servos.forEach(function (thisServo) {
        servo.configure(thisServo, 0.05, 0.12, function () {
            count ++;
            if (count === total) {
                setInterval(function () {
                    servos.forEach(function (thisServo) {
                        if (thisServo == 2) {
                            pos = 1 - setting;
                        } else {
                            pos = setting;
                        }
                        servo.move(thisServo, pos);
                    });
                }, 100);
            }
        });
    });
});