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
let position = 0;

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
  console.log("u " + rotateSum);
  if (position == 0) {
    rotateSum = "rotate(-90deg)";
    position = 3;
  } else {
    position -= 1;
    rotateSum = rotateValue + "rotate(-90deg)";
  }
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  console.log("position ", position);
};
//let lastPosition = "rotate(90deg)rotate(90deg)rotate(90deg)";
downBtn.onclick = function () {
  console.log("d " + rotateSum);
  if (position == 3) {
    console.log("here");
    rotateSum = "";
    position = 0;
  } else {
    position += 1;
    rotateSum = rotateValue + "rotate(90deg)";
  }
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  console.log("position ", position);
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
