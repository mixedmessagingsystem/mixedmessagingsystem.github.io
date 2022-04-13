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


    knob();
    playstop();

}




function playstop() {

    var data = false;

    translate(100, 100);

    if (mouseButton && data === false) {
        data = true;
        stop();
    } else if (data === true && mouseButton) {
        data = false;
        play();
    } else {
        data = false;
        play();
    }
    print(mouseButton);
}



function stop() {
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(0, 0, 60, 60);
}


function play() {
    const dim = Math.min(width, height);
    fill(255);
    noStroke();
    polygon(0, 0, dim * 0.04, 3);
}


function knob() {
    push();
    const w = max(0, min(1, mouseX / width));
    translate(width / 2, height / 2);
    noStroke();
    fill(200);

    ellipse(0, 0, 130, 130);
    rotate(-40 + w * 4.7);
    //print(mouseX);
    fill(0, 0, 0);
    rectMode(CENTER);
    rect(0, -50, 8, 30);
    pop();
}

function paneando() {

    if (mouseX <= windowWidth / 2 - 120) {

        for (let i = 0; i < left.length; i++) {
            left[i].addCue(left[i].duration(), random(left).play());
        }
    }

    if (mouseX >= windowWidth / 2 + 20) {

        for (let i = 0; i < left.length; i++) {
            left[i].addCue(left[i].duration(), random(right).play());

        }

    }
}

// boton de play! (triangle)

function polygon(x, y, radius, sides = 3, angle = 0) {
    beginShape();
    for (let i = 0; i < sides; i++) {
        const a = angle + TWO_PI * (i / sides);
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

// On window resize, update the canvas size

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}