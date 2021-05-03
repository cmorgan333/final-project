import * as MODEL from "../model/model.js";

let currentHeroImage = "home";
let currentNav = "home";
let currentLanding = "gallery";

function init() {
  $("nav a").click(function (event) {
    let btnId = this.id;
    let contentID = btnId + "Content";
    console.log(btnId);

    if (btnId == "home") {
      $(".hero").css("display", "block");
      $(".hero")
        .removeClass(`${currentHeroImage}-hero-image`)
        .addClass(`${btnId}-hero-image`);
      currentHeroImage = btnId;
      // ======NAV COLOR===//
      // $("nav").css("display");
      $("nav")
        .removeClass(`${currentHeroImage}-white-nav`)
        .addClass(`${btnId}-black-nav, black-logo, black-links`);
      currentNav = btnId;
      // =====================//
    } else {
      $(".hero").removeClass(`${currentHeroImage}-hero-image`);
      $(".hero").css("display", "none");
      currentHeroImage = btnId;
      // =========NAV COLOR======//
      $("nav")
        .removeClass(`${currentNav}-white-nav`)
        .addClass("black-nav", "black-logo", "black-links");
    }

    // Make images clickable
    function init() {
      $("gallery-content a").click(function (event) {
        let btnId = this.id;
        let contentID = btnId + "Content";

        if (btnId == "gallery") {
          $(".image")
            .removeClass(`gallery-content`)
            .addClass(`foodfest-content`);
          $(".image").removeClass(`gallery-content`);
        }
      });
    }

    MODEL.getPageContent(contentID);
  });
}

// checks for elements to be ready

$(document).ready(function () {
  init();
});
