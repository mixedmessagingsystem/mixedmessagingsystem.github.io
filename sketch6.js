var left = [];
var right = [];

var button;

let value = 0;

let loopStart = 0.5;
let loopDuration = 0.2;


// loading samples 

function preload() {

    left.push(loadSound('left/00.mp3'));
    left.push(loadSound('left/02.mp3'));
    left.push(loadSound('left/03.mp3'));
    left.push(loadSound('left/04.mp3'));
    left.push(loadSound('left/05.mp3'));
    left.push(loadSound('left/06.mp3'));
    left.push(loadSound('left/07.mp3'));
    left.push(loadSound('left/08.mp3'));
    left.push(loadSound('left/09.mp3'));
    left.push(loadSound('left/10.mp3'));

    right.push(loadSound('right/00.mp3'));
    right.push(loadSound('right/01.mp3'));
    right.push(loadSound('right/02.mp3'));
    right.push(loadSound('right/03.mp3'));
    right.push(loadSound('right/04.mp3'));
    right.push(loadSound('right/05.mp3'));
    right.push(loadSound('right/06.mp3'));
    right.push(loadSound('right/07.mp3'));
    right.push(loadSound('right/08.mp3'));
    right.push(loadSound('right/09.mp3'));
    right.push(loadSound('right/10.mp3'));
}


function setup() {

    let cnv = createCanvas(windowWidth, windowHeight);

    // Clear with black on setup

    frameRate(10);
    background(0);


}

// Render loop that draws shapes with p5

function draw() {

    // Black background
    background(0);

    // Draw the knob 

    push();
    knob();
    pop();

    push();
    stop();
    pop();

    push();
    play();
    pop();

    push();
    paneando();
    pop();

}


// On window resize, update the canvas size

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}