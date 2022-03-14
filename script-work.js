"use strict";
let clickCount = "";
let moveToTheLeft = 15
function sliderTesterLeft () {
    document.getElementById("imgContainer").classList.add("moveToLeft")
    document.getElementById("imgContainer").classList.remove("moveToRight")
    clickCount++;
    console.log(clickCount);
    // ------ this was my first attempt at animating it, I think I got it a little too complicated ---------
    // let moveElementById = document.getElementById("imgContainer").style.left
    // moveElementById = clickCount + moveToTheLeft;
    // console.log(moveElementById)
    //---------------------------
    // if (document.getElementById("imgContainer").style.left = "15rem") {
    //     document.getElementById("imgContainer").style.left = "0rem" ;  

    // } 
    //------------------------------------------------------------------------------------------------------
    console.log("it was clicked");
}

function sliderTesterRight () {

    document.getElementById("imgContainer").classList.add("moveToRight")
    document.getElementById("imgContainer").classList.remove("moveToLeft")
    // ------ this was my first attempt at animating it, I think I got it a little too complicated ---------
    // document.getElementById("imgContainer").style.right = "15rem";
    // if (document.getElementById("imgContainer").style.left = "15rem") {
    //     document.getElementById("imgContainer").style.right = "0rem"   

    // } 
    //------------------------------------------------------------------------------------------------------

    console.log("it was clicked");
}




// document.querySelector(".leftButton").addEventListener("click", function() {
//     document.getElementById("img--1").style.left = "-30rem";
// })



let failedProject = new Image();
let pump1 = new Image();
let safetyScary = new Image();
function init() {
    failedProject.src = "img/failedProject.jpg"
    window.requestAnimationFrame(draw)
}

function draw() {
    let ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0,0,300,300);
    ctx.drawImage(failedProject, 0,0);
    ctx.translate(300,0);
    ctx.restore();

}

init();
