var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'joystick', adaptor: 'joystick' },
  device: { name: 'controller', driver: 'xbox-360' },

  work: function(my) {
    console.log( my.controller )
    ["a", "b", "x","y"].forEach(function(button) {
      console.log(button);
      // my.controller.on(button + ":press", function() {
      //   console.log("Button " + button + " pressed.");
      // });
      //
      // my.controller.on(button + ":release", function() {
      //   console.log("Button " + button + " released.");
      // });
    });

    my.controller.on("x:press", function(pos) {
      console.log("X:", pos);
    });

    my.controller.on("y:press", function(pos) {
      console.log("Y:", pos);
    });

    my.controller.on("b:press", function(pos) {
      console.log("B:", pos);
    });

    my.controller.on("a:press", function(pos) {
      console.log("A:", pos);
    });

    my.controller.on("left_x:move", function(pos) {
      console.log("Left Stick - X:", pos);
    });

    my.controller.on("left_y:move", function(pos) {
      console.log("Left Stick - Y:", pos);
    });

    my.controller.on("right_x:move", function(pos) {
      console.log("Right Stick - X:", pos);
    });

    my.controller.on("right_y:move", function(pos) {
      console.log("Right Stick - Y:", pos);
    });

    my.controller.on("lt:move", function(pos) {
      console.log("Left Trigger: ", pos);
    });

    my.controller.on("rt:move", function(pos) {
      console.log("Right Trigger: ", pos);
    });
  }
}).start();
