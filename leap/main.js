// LEAP Motion

var Cylon = require('cylon');

Cylon.robot({
  name: 'testingLeap',
  connections:[
    {
      name: 'leapmotion',
      adaptor: 'leapmotion',
      port: '127.0.0.1:6437'
    }
  ] ,
  devices: [
    {
      name: 'leapmotion',
      driver: 'leapmotion'
    }
  ],


  work: function(my) {

    my.leapmotion.on('gesture', function(gesture) {

      if(gesture.state !== 'update'){


          if (gesture.type === 'circle' ){
              console.log('========= A CIRCLE ===========');

          }

          if (gesture.type === 'keytap' ){
              console.log('========= A Keytap ===========');

          }

          if (gesture.type === 'swipe'){
            if(gesture.direction[0] >= 0){
              console.log('========= right========= ');

            }else{
              console.log('========= left========= ');

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
