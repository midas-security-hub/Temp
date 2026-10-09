/* ============================================================
   NeuroShell — contact.js
   Form validation and copy-template action
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initContactForm();
    initCopyTemplate();
  });

  /* Validate and handle the message template form client-side */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form__status");
      clearErrors(form);

      if (!validate(form)) {
        if (status) {
          status.textContent = "Please fix the highlighted fields.";
          status.style.color = "var(--color-danger)";
        }
        return;
      }

      if (status) {
        status.textContent = "Message ready. Thank you!";
        status.style.color = "var(--color-success)";
      }
      form.reset();
    });
  }

  function validate(form) {
    var valid = true;
    var fields = form.querySelectorAll("[required]");

    fields.forEach(function (field) {
      var value = field.value.trim();
      if (!value || (field.type === "email" && !isEmail(value))) {
        valid = false;
        showError(field);
      }
    });

    return valid;
  }

  function showError(field) {
    field.setAttribute("aria-invalid", "true");
    field.style.borderColor = "var(--color-danger)";
  }

  function clearErrors(form) {
    form.querySelectorAll("[aria-invalid]").forEach(function (field) {
      field.removeAttribute("aria-invalid");
      field.style.borderColor = "";
    });
  }

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /* Copy the message template to clipboard */
  function initCopyTemplate() {
    var btn = document.querySelector("[data-copy-template]");
    var source = document.querySelector("[data-template]");
    if (!btn || !source) return;

    btn.addEventListener("click", function () {
      var text = source.value || source.textContent;
      navigator.clipboard
        .writeText(text)
        .then(function () {
          var original = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(function () {
            btn.textContent = original;
          }, 1500);
        })
        .catch(function () {
          console.warn("Clipboard unavailable");
        });
    });
  }
})();
