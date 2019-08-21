/*  C201 - Back-end Programming
*   Project 01_06_01

*   Variables and Functions 
*
*   Author: Angelina Stilphen
*   Date: 8.16.19

*   Filename: snoot.js
*/
"use strict";

/* global variables */
var formValidity = true;

function validateRequired() {
    var inputElements = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var elementCount = inputElements.length;
    var requiredValidity = true; 
    var currentElement 

    try {
        for (var i = 0; i < elementCount; i++){
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style. background = "rgb(255, 233, 233)";
                requiredValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if (requiredValidity === false) {
            throw "Please complete all fields.";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    } catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false; 
    }
}

function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;

    validateRequired();

    if (formValidity === true) {
        var form = document.getElementsByTagName("form")[0].submit();
    }
}

function createEventListener() {
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", createEventListener, false);  
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListener);
}