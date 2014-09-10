// LEAP Motion

var Cylon = require('cylon');

Cylon.robot({
  name: 'sample',
  connections:[
    {
      name: 'leapmotion',
      adaptor: 'leapmotion',
      port: '127.0.0.1:6437'
    },
    { name: 'sphero',
    adaptor: 'sphero',
    port: '/dev/tty.Sphero-BPW-AMP-SPP' }

  ] ,
  devices: [
    {
      name: 'leapmotion',
      driver: 'leapmotion'
    }
  ],


  work: function(my) {
    console.log(my);
    my.leapmotion.on('gesture', function(gesture) {

      if(gesture.state !== 'update'){


          if (gesture.type === 'circle' ){
              console.log('========= A CIRCLE ===========');
              my.sphero.stop();
          }

          if (gesture.type === 'keytap' ){
              console.log('========= A Keytap ===========');
              my.sphero.stop();
          }

          if (gesture.type === 'swipe'){
            if(gesture.direction[1] >= 0){
              console.log('========= right========= ');
              my.sphero.roll(180, 0);
            }else{
              console.log('========= left========= ');
              my.sphero.roll(180, 180);
            }
            console.log('========= Swipe ===========');

          }


      }

    });


    my.leapmotion.on('hand', function(payload) {
      //console.log(payload.toString());
    });
  }
}).start();
