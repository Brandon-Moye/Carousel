"use strict"
let movingLeft = 0;
let movingRight = 0;
let positionTrackerLeft = 0;
let positionTrackerRight = 0;

function sliderTesterLeft () {
    console.log("left has been clicked")
    positionTrackerLeft++;
    movingLeft = (positionTrackerLeft*10+positionTrackerRight*-10+'rem');
    movingLeft = "translateX(" + movingLeft + ")"
    console.log(movingLeft);
    document.getElementById("imgContainer").style.transform = movingLeft
    // let moveElementByIdLeft = document.getElementById("imgContainer").style.left;
    console.log(positionTrackerLeft);
}

function sliderTesterRight () {
    console.log("left has been clicked")
    positionTrackerRight++;
    console.log(positionTrackerRight*-10)
    movingRight = (positionTrackerRight*-10+positionTrackerLeft*10+'rem');
    movingRight = "translateX(" + movingRight + ")"
    console.log(movingRight);
    document.getElementById("imgContainer").style.transform = movingRight
    // let moveElementByIdRight = document.getElementById("imgContainer").style.left;
    console.log(positionTrackerRight);
}
