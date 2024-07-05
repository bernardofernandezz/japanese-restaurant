document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let submit = document.getElementById("submit").value;
    let message = document.getElementById("message").value;

    if (name && email && submit && message) {
      // Simulate form submission
      setTimeout(function () {
        document.getElementById("successMessage").classList.remove("hidden");
        document.getElementById("contactForm").reset();
      }, 1000);
    } else {
      document.getElementById("successMessage").classList.add("hidden");
      console.log("contactform", contactForm);
    }
  });

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name && email && message) {
      document.getElementById("successMessage").classList.remove("hidden");
      document.getElementById("successMessage").classList.add("visible");

      // Clear the form fields
      document.getElementById("contactForm").reset();
    } else {
      document.getElementById("successMessage").classList.remove("visible");
      document.getElementById("successMessage").classList.add("hidden");
    }
  });

// Script para fechar o modal
var modal = document.getElementById("successModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
