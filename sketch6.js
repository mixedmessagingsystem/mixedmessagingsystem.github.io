var left = [];
var right = [];

var button;

let value = 0;
let allSoundsAreLoaded = false;
let playNextLeft, playNextRight;
let stopped = false;

var contador = 1;
var dato = 1;

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
    background(0, 0, 255);

    // Before all the sounds are loaded
    if (!allSoundsAreLoaded) {
        fill(255);
        // agregar loading
        
        ellipse(windowWidth / 2, windowHeight / 2, Math.sin(frameCount * 0.1) * 20);
        fill(0, 0, 0);
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
    else {

        // Draw the knob 
       /*
        push();
        pan_vis();
        pop();
*/
        push();
        play();
        pop();

        push();
        stop();
        pop();

        push();
        paneando();
        pop();

        push();
        knob();
        pop();

    }
}



// loading samples 

function loadAllSounds() {
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
    left.push(loadSound('left/11.mp3'));
    left.push(loadSound('left/12.mp3'));
    left.push(loadSound('left/13.mp3'));
    left.push(loadSound('left/14.mp3'));
    left.push(loadSound('left/15.mp3'));
    left.push(loadSound('left/16.mp3'));
    left.push(loadSound('left/17.mp3'));
    left.push(loadSound('left/18.mp3'));
    left.push(loadSound('left/19.mp3'));
    left.push(loadSound('left/20.mp3'));
    left.push(loadSound('left/21.mp3'));
    left.push(loadSound('left/22.mp3'));
    left.push(loadSound('left/23.mp3'));
    left.push(loadSound('left/24.mp3'));
    left.push(loadSound('left/25.mp3'));
    left.push(loadSound('left/26.mp3'));
    left.push(loadSound('left/27.mp3'));
    left.push(loadSound('left/28.mp3'));
    left.push(loadSound('left/29.mp3'));
    left.push(loadSound('left/30.mp3'));
    left.push(loadSound('left/31.mp3'));
    left.push(loadSound('left/32.mp3'));
    left.push(loadSound('left/33.mp3'));
    left.push(loadSound('left/34.mp3'));
    left.push(loadSound('left/35.mp3'));
    left.push(loadSound('left/36.mp3'));
    left.push(loadSound('left/37.mp3'));
    left.push(loadSound('left/38.mp3'));
    left.push(loadSound('left/39.mp3'));
    left.push(loadSound('left/40.mp3'));
    left.push(loadSound('left/41.mp3'));
    left.push(loadSound('left/42.mp3'));
    left.push(loadSound('left/43.mp3'));
    left.push(loadSound('left/44.mp3'));
    left.push(loadSound('left/45.mp3'));
    left.push(loadSound('left/46.mp3'));
    left.push(loadSound('left/47.mp3'));
    left.push(loadSound('left/48.mp3'));
    left.push(loadSound('left/49.mp3'));
    left.push(loadSound('left/50.mp3'));


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
    right.push(loadSound('right/11.mp3'));
    right.push(loadSound('right/12.mp3'));
    right.push(loadSound('right/13.mp3'));
    right.push(loadSound('right/14.mp3'));
    right.push(loadSound('right/15.mp3'));
    right.push(loadSound('right/16.mp3'));
    right.push(loadSound('right/17.mp3'));
    right.push(loadSound('right/18.mp3'));
    right.push(loadSound('right/19.mp3'));
    right.push(loadSound('right/20.mp3'));
    right.push(loadSound('right/21.mp3'));
    right.push(loadSound('right/22.mp3'));
    right.push(loadSound('right/23.mp3'));
    right.push(loadSound('right/24.mp3'));
    right.push(loadSound('right/25.mp3'));
    right.push(loadSound('right/26.mp3'));
    right.push(loadSound('right/27.mp3'));
    right.push(loadSound('right/28.mp3'));
    right.push(loadSound('right/29.mp3'));
    right.push(loadSound('right/30.mp3'));
    right.push(loadSound('right/31.mp3'));

}




// On window resize, update the canvas size

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}