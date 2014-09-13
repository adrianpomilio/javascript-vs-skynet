"use strict"
var Cylon = require('cylon');

Cylon.robot({
  connection: {
      name: 'ardrone',
      adaptor: 'ardrone',
      port: '192.168.1.1'
  },
  device: {
      name: 'drone',
      driver: 'ardrone'
  },

  work: function(my) {
        my.drone.takeoff();
      after((10).seconds(), function() {
          console.log('wave');
          my.drone.animate("wave", 750);
      });

    after((20).seconds(), function() {
      my.drone.land();
    });

        after((25).seconds(), function() {
          my.drone.stop();
        });
  }
}).start();
