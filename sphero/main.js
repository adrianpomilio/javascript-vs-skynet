var Cylon = require('cylon');
var time = 0;
var calibration = false;


Cylon.robot({
  connection: { name: 'sphero', adaptor: 'sphero', port: '/dev/tty.Sphero-BPW-AMP-SPP' },
  device: { name: 'sphero', driver: 'sphero' },
  checkCalibration: (function(_this) {
    return function(me) {
      if (calibration === true) {
        me.sphero.finishCalibration();
        calibration = false;
      }
    };
  })(this),

  work: function(my) {
    my.checkCalibration(my);
    my.sphero.setBackLED(255);

    console.log("forward");
      my.sphero.roll(180, 0);
      my.sphero.stop();
      my.sphero.roll(180, 180);

    every((1).second(), function() {
      my.sphero.setRGB(Math.floor(Math.random() * 100000));
    });

    // every((4).second(), function() {
    //   my.sphero.roll(180, Math.floor(Math.random() * 360));
    // });
  }
}).start();


// tty.Sphero-BPW-AMP-SPP
// cu.Sphero-BPW-AMP-SPP
