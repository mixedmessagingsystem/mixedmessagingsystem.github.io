var left = [];
var right = [];

// first test - loading samples for left channel * m4a is not working

function preload() {

    left.push(loadSound('left/00.wav'));
    left.push(loadSound('left/02.wav'));

    right.push(loadSound('right/01.wav'));
    right.push(loadSound('right/02.wav'));
}

function setup() {

    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.mousePressed(canvasPressed);



    // Clear with black on setup

    background(0);

}

// Render loop that draws shapes with p5

function draw() {

    // Black background
    background(0);

    const w = max(0, min(1, mouseX / width));

    // Draw the knob 

    translate(width / 2, height / 2);
    noStroke();
    fill(200);

    ellipse(0, 0, 130, 130);
    rotate(-40 + w * 4.7);
    //print(mouseX);
    fill(0, 0, 0);
    rectMode(CENTER);
    rect(0, -50, 8, 30);

}

function canvasPressed() {

    if (mouseX <= windowWidth / 2 - 120) {

    for (let i = 0; i < left.length; i++) {
left[i].addCue(left[i].duration(), random(left).play());

/*
        left[i].addCue(left[i].duration(), function(){random(left).play()});
*/
    }
    }

    if (mouseX >= windowWidth / 2 + 20) {
    
    for (let i = 0; i < left.length; i++) {
left[i].addCue(left[i].duration(), random(right).play());

/*
        left[i].addCue(left[i].duration(), function(){random(left).play()});
*/
    }

    }
}

// On window resize, update the canvas size

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}