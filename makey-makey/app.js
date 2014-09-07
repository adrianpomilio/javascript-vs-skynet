/* Makey Makey example with JavaScript 



// handle keys

function keySense(e) {
	var unicode = e.keyCode ? e.keyCode : e.charCode;

	switch(unicode){
	case 87: //W
                    console.log("W");
                    break;
                 
                case 65: //A
                    console.log("A");
                    break;
                 
                case 83: //S
                    console.log("S");
                    break;
                 
                case 68: //D
                    console.log("D");
                    break;
                 
                case 70: //F
                    console.log("F");
                    break;
                     
                case 71: //G
                    console.log("G");
                    break;
                     
                case 32: //Space
                    console.log("space");
                    break;
                     
                case 38: //up
                    console.log("up");
                    break;
                     
                case 40: //down
                    console.log("down");
                    break;
                     
                case 39: //right
                    console.log("right");
                    break;  
                     
                case 37: //left
                    console.log("left");
                    break;      
	}
    
};
document.onkeypress = keySense;
