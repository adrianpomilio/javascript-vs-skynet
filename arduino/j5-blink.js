var jf = require( 'johnny-five' ),
    board = new jf.Board();

board.on( 'ready', function(){
  (new jf.Led(13)).strobe();

  (new jf.Led(12)).strobe();
})
