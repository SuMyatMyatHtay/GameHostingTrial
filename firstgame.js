const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100; 
let y = 100; 
let radius = 50; 
let speed = 20; 

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false; 

function drawGame() { 
    requestAnimationFrame(drawGame); 
    clearScreen(); 
    inputs();
    boundryCheck(); 
    drawGreenBlob(); 
}

function clearScreen() { 
    ctx.fillStyle = "black"; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGreenBlob() { 
    ctx.fillStyle = "green"
    ctx.beginPath(); 
    ctx.arc(x, y, radius, 0, Math.PI * 2); 
    ctx.fill(); 
}

function keyDown(event) { 
    //go up 
    if (event.keyCode == 38) { 
        upPressed = true; 
    }

    //go down 
    if (event.keyCode == 40) { 
        downPressed = true; 
    }

    //go left 
    if (event.keyCode == 37) {
        leftPressed = true; 
    }

    //go right 
    if (event.keyCode == 39){
        rightPressed = true; 
    }
}

function keyUp(event) {
    //stop going up 
    if (event.keyCode == 38) { 
        upPressed = false; 
    }

    //stop going down 
    if (event.keyCode == 40) { 
        downPressed = false; 
    }

    //stop going left 
    if (event.keyCode == 37) {
        leftPressed = false; 
    }

    //stop going right 
    if (event.keyCode == 39){
        rightPressed = false; 
    }
}

function inputs () { 
    if (upPressed) { 
        y = y - speed;
    }

    if (downPressed) {
        y = y + speed; 
    }
    
    if (rightPressed) { 
        x = x + speed; 
    }

    if (leftPressed) { 
        x = x - speed; 
    }
}

function boundryCheck () { 
    if ( y < radius) { 
        y = radius; 
    }

    if ( y > canvas.height - radius) { 
        y = canvas.height - radius; 
    }

    if ( x < radius) { 
        x = radius; 
    }

    if ( x > canvas.width - radius) { 
        x = canvas.width - radius; 
    }
}

document.body,addEventListener('keydown', keyDown); 
document.body.addEventListener('keyup', keyUp); 
drawGame(); 


