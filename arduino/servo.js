var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'arduino', adaptor: 'firmata', port: '/dev/cu.usbmodem1411' },
  //device: { name: 'servo', driver: 'continuous-servo', pin: 13 },

  devices: [
    { name: 'servoL', driver: 'continuous-servo', pin: 11 },
    { name: 'servoR', driver: 'continuous-servo', pin: 13      }
  ],

  work: function(my) {

    console.log(my);
    my.servoL.clockwise();
  //  my.servoR.clockwise();
    // var angle = 45;
    // my.servo.angle(angle);
    //
    // every((1).second(), function() {
    //   angle = angle + 45;
    //
    //   if (angle > 135) {
    //     angle = 45
    //   }
    //
    //   my.servo.angle(angle);
    // });
  }
}).start();
