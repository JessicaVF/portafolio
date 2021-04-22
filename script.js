"use strict";

// TO DO: optimize with jquery, maybe

// Spining triangle selecion:

let skills = document.getElementById("skills");
let education = document.getElementById("education");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");
let rotateValue = circle.style.transform;
let rotateSum;

// Functions of the sections in the left menu
about.onclick = function () {
  rotateSum = "";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  insertInfo("about");
};
projects.onclick = function () {
  rotateSum = "";
  rotateSum = "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  insertInfo("projects");
};

education.onclick = function () {
  rotateSum = "";
  rotateSum = "rotate(90deg)" + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  insertInfo("education");
};
skills.onclick = function () {
  rotateSum = "";
  rotateSum = "rotate(90deg)" + "rotate(90deg)" + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  insertInfo("skills");
};

// Functions of the arrow buttons
upBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
downBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
};
/***** Insert info in #text_principal ******/

function insertInfo(x) {
  let infoFile = `${x}.html`;
  console.log(infoFile);
  fetch(infoFile)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      let infoPrincipal = document.getElementById("text_principal");
      infoPrincipal.innerHTML = data;
    })
    .catch(function (error) {
      console.log("error");
    });
}
