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
let rotateSum = "";
let position = 0;
let lang = "";

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
  position = 1;
  insertInfo("projects");
};

education.onclick = function () {
  rotateSum = "";
  rotateSum = "rotate(90deg)" + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  position = 2;
  insertInfo("education");
};
skills.onclick = function () {
  rotateSum = "";
  rotateSum = "rotate(90deg)" + "rotate(90deg)" + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  position = 3;
  insertInfo("skills");
};

// Functions of the arrow buttons

upBtn.onclick = function () {
  console.log("u " + rotateSum);
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  if (position == 0) {
    rotateSum = "rotate(-90deg)";
    position = 3;
  } else {
    position -= 1;
  }
  getNameFile(position);
};
// IGNORE let lastPosition = "rotate(90deg)rotate(90deg)rotate(90deg)";
downBtn.onclick = function () {
  rotateSum = rotateValue + "rotate(90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  if (position == 3) {
    rotateSum = "";
    position = 0;
  } else {
    position += 1;
  }
  getNameFile(position);
};
// Insert info in #textPrincipal //

function insertInfo(x) {
  let infoFile = `${x}${lang}.html`;
  fetch(infoFile)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      let infoPrincipal = document.getElementById("textPrincipal");
      infoPrincipal.innerHTML = data;
    })
    .catch(function (error) {
      console.log("error");
    });
}
/***** Transform the number we get into a name and call insertInfo ******/

function getNameFile(position) {
  let nameFile = ["about", "projects", "education", "skills"];
  insertInfo(nameFile[position]);
}
/***** Change de language ******/

$(".changeLanguage").on("click", function (event) {
  changeLanguage($(event.target).data("language"));
});
function changeLanguage(language) {
  let x = "index" + language + ".json";
  lang = language;
  console.log(x);
  fetch(x)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let toTranslate = $(".translate");
      toTranslate[0].innerText = data.home;
      toTranslate[1].innerText = data.cv;
      toTranslate[2].innerText = data.contact;
      toTranslate[3].innerText = data.about;
      toTranslate[7].innerText = data.about;
      toTranslate[4].innerText = data.projects;
      toTranslate[8].innerText = data.projects;
      toTranslate[5].innerText = data.education;
      toTranslate[9].innerText = data.education;
      toTranslate[6].innerText = data.skills;
      toTranslate[10].innerText = data.skills;
      getNameFile(position);
    })
    .catch(function (error) {
      console.log(error);
    });
}
