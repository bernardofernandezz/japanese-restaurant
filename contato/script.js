document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    if (name && email && subject && message) {
      // Simulate form submission
      setTimeout(function () {
        document.getElementById("successMessage").classList.remove("hidden");
        document.getElementById("errorMessage").classList.add("hidden");
        document.getElementById("contactForm").reset();
      }, 1000);
    } else {
      document.getElementById("successMessage").classList.add("hidden");
      document.getElementById("errorMessage").classList.remove("hidden");
    }
  });
