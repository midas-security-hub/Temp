/* ============================================================
   NeuroShell — documents.js
   Document status filters
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initDocumentFilters();
  });

  function initDocumentFilters() {
    var filters = document.querySelectorAll(".filter[data-filter]");
    var rows = document.querySelectorAll("[data-status]");
    if (!filters.length || !rows.length) return;

    filters.forEach(function (filter) {
      filter.addEventListener("click", function () {
        var value = filter.getAttribute("data-filter");

        filters.forEach(function (f) {
          f.classList.toggle("is-active", f === filter);
        });

        rows.forEach(function (row) {
          var status = row.getAttribute("data-status");
          var show = value === "all" || status === value;
          row.hidden = !show;
        });
      });
    });
  }
})();
