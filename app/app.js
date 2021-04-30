import * as MODEL from "../model/model.js";

function init() {
  $("nav a").click(function (event) {
    let btnId = this.id;
    let contentID = btnId + "Content";

    MODEL.getPageContent(contentID);
  });
}

// checks for elements to be ready

$(document).ready(function () {
  init();
});
