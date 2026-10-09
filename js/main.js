/* ============================================================
   NeuroShell — main.js
   Mobile navigation, Subnav scroll tracking, Smooth Scroll & Back to top
   ============================================================ */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initSubnavScrollSpy();
    initBackToTop();
    initYear();
  });

  /* Mobile Navigation Menu Toggle */
  function initMobileMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest(".nav__link")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Subnav ("ON THIS PAGE") Active Link ScrollSpy */
  function initSubnavScrollSpy() {
    var subnavLinks = document.querySelectorAll(".subnav-link");
    if (!subnavLinks.length) return;

    var sectionIds = Array.from(subnavLinks).map(function (link) {
      return link.getAttribute("href").replace("#", "");
    });

    var sections = sectionIds.map(function (id) {
      return document.getElementById(id);
    }).filter(Boolean);

    function onScroll() {
      var scrollPos = window.scrollY + 180;

      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          subnavLinks.forEach(function (link) {
            if (link.getAttribute("href") === "#" + id) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  /* Back-to-top button */
  function initBackToTop() {
    var btn = document.querySelector(".back-to-top-btn");
    if (!btn) return;

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Auto-update copyright year */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }
})();
