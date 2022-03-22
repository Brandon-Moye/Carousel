"use strict";
let movingLeft = 0;
let movingRight = 0;
let positionTrackerLeft = 0;
let positionTrackerRight = 0;

function sliderTesterLeft() {
  // activatingTheCarousel(positionTrackerLeft,positionTrackerRight,movingLeft,10,-10);

  console.log("left has been clicked");
  positionTrackerLeft++;
  movingLeft = positionTrackerLeft * 20 + positionTrackerRight * -20 + "rem";
  movingLeft = "translateX(" + movingLeft + ")";
  document.getElementById("imgContainer").style.transform = movingLeft;
  // let moveElementByIdLeft = document.getElementById("imgContainer").style.left;
  console.log(positionTrackerLeft);
}

function sliderTesterRight() {
  // activatingTheCarousel(positionTrackerRight,positionTrackerLeft,movingRight,-10,10);

  console.log("left has been clicked");
  positionTrackerRight++;
  console.log(positionTrackerRight * -20);
  movingRight = positionTrackerRight * -20 + positionTrackerLeft * 20 + "rem";
  movingRight = "translateX(" + movingRight + ")";
  document.getElementById("imgContainer").style.transform = movingRight;
  // let moveElementByIdRight = document.getElementById("imgContainer").style.left;
  console.log(positionTrackerRight);
}

/**
 * How to get the image to move based on the thumbnail image clicked
 * Will need to know position of the slide to accurately move it back
 * Maybe getting the image of the specific position and then going from there
 */

/*
this allows for a permanent hover to hold the image in the mainImage section once the hover is lifted, but will change
if the mouse hovers over another image
*/

// const period = ".";

addOrRemoveImageonMainDiv(
  ".image1",
  "image1",
  "mainImage",
  "permaHoverImage2",
  "permaHoverImage3"
);

function addOrRemoveImageonMainDiv(
  imageToReference,
  imageToAdd,
  mainImage,
  firstImageToRemove,
  secondImageToRemove
) {
  return document
    .querySelector(imageToReference)
    .addEventListener("mouseover", function () {
      document.getElementById(mainImage).classList.add(imageToAdd);
      document.getElementById(mainImage).classList.remove(firstImageToRemove);
      document.getElementById(mainImage).classList.remove(secondImageToRemove);
    });
}

// document.querySelector(".image1").addEventListener("mouseover", function () {
//   document.getElementById("mainImage").classList.add("permaHoverImage1");
//   document.getElementById("mainImage").classList.remove("permaHoverImage2");
//   document.getElementById("mainImage").classList.remove("permaHoverImage3");
// });
document.querySelector(".image2").addEventListener("mouseover", function () {
  document.getElementById("mainImage").classList.add("permaHoverImage2");
  document.getElementById("mainImage").classList.remove("permaHoverImage1");
  document.getElementById("mainImage").classList.remove("permaHoverImage3");
});
document.querySelector(".image3").addEventListener("mouseover", function () {
  document.getElementById("mainImage").classList.add("permaHoverImage3");
  document.getElementById("mainImage").classList.remove("permaHoverImage1");
  document.getElementById("mainImage").classList.remove("permaHoverImage2");
});
