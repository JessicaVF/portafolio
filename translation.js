"use strict";


// This translation file it's only for the CV and contact sections. As in those we only need to change the navbar links to use the main
// script was problematic, as it keep telling "x element its null" (as we are doing too much stuff in the main script)

$(".changeLanguage").on("click", function (event) {
  changeLanguage($(event.target).data("language"));
});
function changeLanguage(language) {
  
  let x = "index" + language + ".json";
  let lang = language;
  fetch(x)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let toTranslate = $(".translate");
      toTranslate[0].innerText = data.home;
      toTranslate[1].innerText = data.cv;
      toTranslate[2].innerText = data.contact;
      console.log(lang);
    }
    )
    .catch(function (error) {
      console.log(error);
    });
}
