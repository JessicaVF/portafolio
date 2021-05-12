"use strict";

let skills = document.getElementById("skills");
let education = document.getElementById("education");
let about = document.getElementById("about");
let projects = document.getElementById("projects");
let circle = document.getElementById("circle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");
let position = 0;
let lang = "";
let skillH = document.getElementById("skillH");
let rotates = [
  "",
  "rotate(90deg)",
  "rotate(90deg)rotate(90deg)",
  "rotate(90deg)rotate(90deg)rotate(90deg)",
];
let nameFile = ["about", "projects", "education", "skills"];
let imgId = [imgAbout, imgProjects, imgEducation, imgSkills];
// Functions of the sections in the left menu
about.onclick = function () {
  position = 0;
  spin(position);
};
projects.onclick = function () {
  position = 1;
  spin(position);
};

education.onclick = function () {
  position = 2;
  spin(position);
};
skills.onclick = function () {
  position = 3;
  spin(position);
};

// Functions of the arrow buttons

upBtn.onclick = function () {
  position == 0 ? (position = 3) : (position -= 1);
  spin(position);
};

downBtn.onclick = function () {
  position == 3 ? (position = 0) : (position += 1);
  spin(position);
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
      console.log(error);
    });
}
/***** Transform the number we get into a name and call insertInfo ******/

function spin(position) {
  circle.style.transform = rotates[position];
  for (let i = 0; i < imgId.length; i++) {
    if (imgId.indexOf[imgId[i]] != position) {
      imgId[i].style.opacity = 0;
    }
  }
  imgId[position].style.opacity = 1;
  insertInfo(nameFile[position]);
}
/***** Change the language ******/

$(".changeLanguage").on("click", function (event) {
  changeLanguage($(event.target).data("language"));
});
function changeLanguage(language) {
  let x = "index" + language + ".json";
  lang = language;
  fetch(x)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let toTranslate = $(".translate");
      toTranslate[0].innerText = data.about;
      toTranslate[1].innerText = data.projects;
      toTranslate[2].innerText = data.education;
      toTranslate[3].innerText = data.skills;
      toTranslate[4].innerText = data.about;
      toTranslate[5].innerText = data.projects;
      toTranslate[6].innerText = data.education;
      toTranslate[7].innerText = data.skills;
      toTranslate[8].innerText = data.home;
      toTranslate[9].innerText = data.cv;
      toTranslate[10].innerText = data.contact;
      console.log(lang);
      if (lang == "") {
        console.log(skillH);
        skillH.style.left = "25%";
      } else {
        skillH.style.left = "12%";
        console.log(skillH);
      }
      spin(position);
    })
    .catch(function (error) {
      console.log(error);
    });
}
