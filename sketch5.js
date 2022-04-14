
var left = [];
var right = [];

var button;

let value = 0;


// first test - loading samples for left channel * m4a is not working

function preload() {

    left.push(loadSound('left/00.wav'));
    left.push(loadSound('left/02.wav'));

    right.push(loadSound('right/01.wav'));
    right.push(loadSound('right/02.wav'));

}

function setup() {

    let cnv = createCanvas(windowWidth, windowHeight);

    // Clear with black on setup

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
