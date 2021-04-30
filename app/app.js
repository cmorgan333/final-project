import * as MODEL from "../model/model.js";

let currentHeroImage = "home";
let currentNav = "home";

function init() {
  $("nav a").click(function (event) {
    let btnId = this.id;
    let contentID = btnId + "Content";

    if (btnId == "home") {
      $(".hero").css("display", "block");
      $(".hero")
        .removeClass(`${currentHeroImage}-hero-image`)
        .addClass(`${btnId}-hero-image`);
      currentHeroImage = btnId;
      // ======NAV COLOR===//
      // $("nav").css("display", "white-nav");
      // $("nav")
      //   .removeClass(`${currentNav}-white-nav`)
      //   .addClass(`${btnId}-black-nav`);
      // currentNav = btnId;
      // =====================//
    } else {
      $(".hero").removeClass(`${currentHeroImage}-hero-image`);
      $(".hero").css("display", "none");
      currentHeroImage = btnId;
      // =========NAV COLOR======//
      // $("nav").removeClass(`${currentNav}-white-nav`);
      // $("nav").addClass(`.black-nav`);

      // currentNav = btnId;

      // ======================//
    }

    MODEL.getPageContent(contentID);
  });
}

// checks for elements to be ready

$(document).ready(function () {
  init();
});
