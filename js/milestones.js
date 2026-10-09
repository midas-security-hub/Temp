/* ============================================================
   NeuroShell — milestones.js
   Assessment selector, details and timeline
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initAssessmentSelector();
  });

  function initAssessmentSelector() {
    var buttons = document.querySelectorAll(".selector__item");
    var details = document.querySelectorAll("[data-assessment]");
    if (!buttons.length || !details.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = btn.getAttribute("data-target");

        buttons.forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-selected", String(b === btn));
        });

        details.forEach(function (panel) {
          var match = panel.getAttribute("data-assessment") === target;
          panel.hidden = !match;
        });
      });
    });

    var first = document.querySelector(".selector__item");
    if (first && !document.querySelector(".selector__item.is-active")) {
      first.click();
    }
  }
})();
