var x_p = 100;
var y_p = 100;
var d_p = 20;


var x_s = 180;
var y_s = 100;
var d_s = 30;


function stop() {

    if (mouseIsPressed == true) {

        if (dist(mouseX, mouseY, x_s, y_s) < d_s / 2 && mouseButton == LEFT) {

            fill(0); // Black

            for (let i = 0; i < left.length; i++) {

                left[i].addCue(left[i].duration(), random(left).stop());
            }

            for (let i = 0; i < right.length; i++) {

                right[i].addCue(right[i].duration(), random(right).stop());
            }


        }

    } else {

        fill(255); // Gray

    }

    noStroke();
    rectMode(CENTER);
    rect(x_s, y_s, d_s, d_s);

}



function play() {


    if (mouseIsPressed == true) {

        if (dist(mouseX, mouseY, x_p, y_p) < d_p / 2 && mouseButton == LEFT) {

            fill(0); // Black

            for (let i = 0; i < left.length; i++) {

                left[i].addCue(left[i].duration(0.2), random(left).loop());
                left[i].setVolume(0);

            }

            for (let i = 0; i < right.length; i++) {

                right[i].addCue(right[i].duration(), random(right).play());
                right[i].setVolume(0);

            }


        }

    } else {

        fill(255); // Gray

    }

    noStroke();
    polygon(x_p, y_p, d_p, 3);
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

    if (mouseX <= windowWidth / 2) {

        for (let i = 0; i < left.length; i++) {

            left[i].setVolume(0.2);

        }

        for (let i = 0; i < right.length; i++) {

            right[i].setVolume(0);

        }

    }

    if (mouseX >= windowWidth / 2 ) {

        for (let i = 0; i < left.length; i++) {

            left[i].setVolume(0);


        }
    }

    if (mouseX >= windowWidth / 2) {

        for (let i = 0; i < right.length; i++) {

            right[i].setVolume(0.2);


        }
    }
}



/*
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
*/

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