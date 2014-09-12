var jf = require( 'johnny-five' ),
    myServo,
    board = new jf.Board();


board.on( 'ready', function(){
  myServo = new Servo(11);

  board.repl.inject({
    servo: myServo
  });

  myServo.sweep();

  this.wait(5000, function(){
    myServo.stop();
    myServo.center();
  });

})
