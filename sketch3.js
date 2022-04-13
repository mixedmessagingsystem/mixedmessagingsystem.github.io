var left;
var right = [];

var button;

// first test - loading samples for left channel * m4a is not working

function preload() {

left = loadSound("left/00.wav");
    /*
            left.push(loadSound('left/00.wav'));
            left.push(loadSound('left/02.wav'));

            right.push(loadSound('right/01.wav'));
            right.push(loadSound('right/02.wav'));
    */
}

function setup() {

    createCanvas(200, 200);

    button = createButton("play");

    button.mousePressed(togglePlaying);

}

function togglePlaying() {
    if (!left.isPlaying()) {
        left.play();
        left.setVolume(0.1);
        button.html("pause");
    } else {
        left.pause();
        button.html("play");
    }
}

// Render loop that draws shapes with p5

function draw() {


    // Black background
    background(0);

    // Draw the play button 

    // Draw the knob 

}


// On window resize, update the canvas size

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}