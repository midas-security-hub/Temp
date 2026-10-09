/* ============================================================
   NeuroShell — slides.js
   Presentation interactions
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initSlidePreview();
  });

  function initSlidePreview() {
    var cards = document.querySelectorAll("[data-slide]");
    if (!cards.length) return;

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        var title = card.getAttribute("data-slide");
        var link = card.getAttribute("data-href");
        if (link) {
          window.open(link, "_blank", "noopener");
        } else {
          console.info("Slide preview:", title);
        }
      });
    });
  }
})();
