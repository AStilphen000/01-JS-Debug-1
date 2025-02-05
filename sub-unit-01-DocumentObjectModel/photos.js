/*    Exercise 01_05_01

 *    Photo gallery
 *    Variables and functions
 *    Author: Angelina Stilphen
 *    Date:   8.15.19

 *    Filename: photos.js
 */

"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var photoOrder = [1,2,3,4,5];
var figureCount = 3;
// var autoAdvance = setInterval(rightAdvance, 1000);


/* shift all images one figure to the left, and change values in photoOrder array to match  */
function rightArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] + 1) === 6) {
         photoOrder[i] = 1;
      } else {
         photoOrder[i] += 1;
      }
      populateFigures();
   }
}

/* shift all images one figure to the right, and change values in photoOrder array to match  */
function leftArrow() {
   for (var i = 0; i < 5; i++) {
      if ((photoOrder[i] - 1) === 0) {
         photoOrder[i] = 5;
      } else {
         photoOrder[i] -= 1;
      }
      populateFigures();
   }
}

function previewFive() {
   // alert("preview five images");
   lastFigure.id = "fig5";
   lastFigure.style.zIndex = "5";
   lastFigure.style.position = "absolute";
   lastFigure.style.right = "45px";
   lastFigure.style.top = "67px";
   var lastImage = document.createElement("img");
   lastImage.width = "240";
   lastImage.height = "135";
   var articleElem = document.getElementsByTagName("article")[0];
   // alert(articleElem);
<<<<<<< HEAD
   lastFigure.appendChild(lastImage);
   // articleElem.appendchild(lastFigure);
   articleElem.insertBefore(lastFigure, document.getElementById("rightarrow"));
   var firstFigure = lastFigure.cloneNode(true);
   firstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";
   // article Elem.appendchild(firstFigure);
   articleElem.insertBefore(firstFigure, document.getElementById("fig2"));
   document.getElementsByTagName("img")[0].src = "images/IMG_0" + photoOrder[0] + "sm.jpg";
   document.getElementsByTagName("img")[4].src = "images/IMG_0" + photoOrder[4] + "sm.jpg";
   figureCount = 5; 
   var numberButton = document.querySelector("#fiveButton p");
   numberButton.innerHTML = "Show fewer images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewFive, false);
      numberButton.addEventListener("click", previewThree, false);   
   } 
    else if (numberButton.attachEvent) {
       numberButton.detachEvent("onclick", previewFive);
       numberButton.attachEvent("onclick", previewThree);
   }
=======
   lastFigure.appendChild(lastImage); 
   articleElem.appendChild(lastFigure);
   var firstFigure = firstFigure.cloneNode(ture);
   firsstFigure.id = "fig1";
   firstFigure.style.right = "";
   firstFigure.style.left = "45px";
   articleElem.appendChild(firstFigure);
>>>>>>> master
}

/* open center figure in separate window */
function zoomFig() {
   alert("center image clicked");
}

/* create event listeners and populate image elements */
function setUpPage() {
   createEventListeners();
   populateFigures();
}

function createEventListeners() {
   var leftarrow = document.getElementById("leftarrow");
   if (leftarrow.addEventListener) {
       leftarrow.addEventListener("click", leftArrow, false);
   } else if (leftarrow.attachEvent) {
       leftarrow.attachEvent("onclick", leftArrow);
   }
   var rightarrow = document.getElementById("rightarrow");
   if (rightarrow.addEventListener) {
       rightarrow.addEventListener("click", rightArrow, false);
   } else if (rightarrow.attachEvent) {
       rightarrow.attachEvent("onclick", rightArrow);
   }
   var mainFig = document.getElementsByTagName("img")[1];
   if (mainFig.addEventListener) {
       mainFig.addEventListener("click", zoomFig, false);
   } else if (mainFig.attachEvent) {
       mainFig.attachEvent("onclick", zoomFig);
   }
   var showAllButton = document.querySelector("#fiveButton p");
   if (showAllButton.addEventListener) {
       showAllButton.addEventListener("click", previewFive, false);
   } else if (showAllButton.attachEvent) {
       showAllButton.attachEvent("onclick", previewFive);
   }
}

function previewThree() {
   var articleElem = document.getElementsByTagName("article")[0];
   var numberButton = documemt.querySelector("#fiveButton p");
   articleElem.removeChild(document.getElementById("fig1"));
   articleElem.removeChild(documemt.getElementById("fig5"));
   figureCount = 3;
   numberButton.innerHTML = "Show more images";
   if (numberButton.addEventListener) {
      numberButton.removeEventListener("click", previewThree, false);
      numberButton.attachEventListener("onclick", previewFive, false);
   } else if (numberButton.attachEvent) {
      numberButton.detachEvent("onclick", previewThree);
      numberButton.attachEvent("onclick", previewFive);
   }
}

function populateFigures() {
   var filename;
   var currentFig;
   if (figureCount === 3) {
       for (var i = 1; i < 4; i++) {
           filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
           currentFig = document.getElementsByTagName("img")[i - 1];
           currentFig.src = filename;
       }
   }
   else {
       for (var i = 0; i < 5; i++) {
           filename = "images/IMG_0" + photoOrder[i] + "sm.jpg";
           currentFig = document.getElementsByTagName("img")[i];
           currentFig.src = filename;
       }
   }
}



/* run setUpPage() function when page finishes loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
}