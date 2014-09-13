var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'arduino', adaptor: 'firmata', port: '/dev/cu.usbmodem1411' },

  devices: [
    { name: 'led', driver: 'led', pin: 13 },
    { name: 'led2', driver: 'led', pin: 12 },
    { name: 'button', driver: 'button', pin: 2 }
  ],

  work: function(my) {
    every(
      (2).second(),
      function() {
        my.led.toggle();
      }
    );
    every(
      (1).second(),
        function() {
          my.led2.toggle();
        }
    )
  }

}).start();
