var Cylon = require('cylon');

Cylon.robot({
  connection: {
    name: 'leapmotion',
    adaptor: 'leapmotion',
    port: '127.0.0.1:6437'
  },

  device: {
    name: 'leapmotion',
    driver: 'leapmotion'
  },

  work: function(my) {

    my.leapmotion.on('gesture', function(gesture) {
      console.log(gesture.type);
      if(gesture.state !== 'update'){
        console.log('=============Start==================');
        console.log(gesture.state);
        console.log(gesture.type);
        console.log(gesture.speed);
        console.log('==============Stop==================');

          if (gesture.type=='circle' ){
              console.log('========= A CIRCLE ===========');
          }

          if (gesture.type=='keytap' ){
              console.log('========= A Keytap ===========');
          }
      }

    });


    my.leapmotion.on('hand', function(payload) {
      //console.log(payload.toString());
    });
  }
}).start();
