var left = [];
var right = [];

var button;

let value = 0;
let allSoundsAreLoaded = false;
let playNextLeft, playNextRight;
let stopped = false;

function setup() {

    let cnv = createCanvas(windowWidth, windowHeight);

    // Clear with black on setup

    background(0);
    noStroke();
    loadAllSounds();

}

// Render loop that draws shapes with p5

function draw() {
    // Black background
    background(0);

    // Before all the sounds are loaded
    if (!allSoundsAreLoaded) {
        fill(255);
        ellipse(windowWidth / 2, windowHeight / 2, Math.sin(frameCount * 0.1) * 20);
        fill(255, 0, 0);
        ellipse(windowWidth / 2, windowHeight / 2, Math.sin(frameCount * 0.1) * 10);
        fill(255);
        let loaded = true;
        for (let i = 0; i < left.length; i++) {
            if (left[i].isLoaded() == false) {
                loaded = false;
            }
        }
        for (let i = 0; i < right.length; i++) {
            if (right[i].isLoaded() == false) {
                loaded = false;
            }
        }
        if (loaded) {
            // console.log("EVERYTHING IS LOADED NOW");
            allSoundsAreLoaded = true;
            playNextLeft = function() {
                if (stopped == false) { 
                    let s = random(left);
                    s.play();
                    // console.log("playing the next left");
                    setTimeout(playNextLeft, (s.duration() * 0.9) * 1000);
                }
                
            };
            playNextRight = function() {
                if (stopped == false) { 
                    let s = random(right);
                    s.play();
                    // console.log("playing the next right");
                    setTimeout(playNextRight, (s.duration() * 0.9) * 1000);
                }
            };
            // for (let i = 0; i < left.length; i++) {
            //     let s = left[i];
            //     s.addCue(s.duration() - 0.1, playNextLeft);
            // }
            // for (let i = 0; i < right.length; i++) {
            //     let s = right[i];
            //     s.addCue(s.duration() - 0.1, playNextRight);
            // }
        }

    }

        // When all the sounds are loaded

    else  {

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
}



// loading samples 

function loadAllSounds() {
    left.push(loadSound('left/00.mp3'));
    left.push(loadSound('left/02.mp3'));
    left.push(loadSound('left/03.mp3'));
    // left.push(loadSound('left/04.mp3'));
    // left.push(loadSound('left/05.mp3'));
    // left.push(loadSound('left/06.mp3'));
    // left.push(loadSound('left/07.mp3'));
    // left.push(loadSound('left/08.mp3'));
    // left.push(loadSound('left/09.mp3'));
    // left.push(loadSound('left/10.mp3'));
    right.push(loadSound('right/00.mp3'));    
    right.push(loadSound('right/01.mp3'));
    right.push(loadSound('right/02.mp3'));
    // right.push(loadSound('right/03.mp3'));
    // right.push(loadSound('right/04.mp3'));
    // right.push(loadSound('right/05.mp3'));
    // right.push(loadSound('right/06.mp3'));
    // right.push(loadSound('right/07.mp3'));
    // right.push(loadSound('right/08.mp3'));
    // right.push(loadSound('right/09.mp3'));
    // right.push(loadSound('right/10.mp3'));
}




// On window resize, update the canvas size

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}