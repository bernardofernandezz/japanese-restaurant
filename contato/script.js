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
      }, 1000);
    } else {
      document.getElementById("successMessage").classList.add("hidden");
      console.log("contactform", contactForm);
    }
  });

// Mostrar popup ao enviar formulário
function showCustomAlert() {
  document.getElementById("custom-alert").classList.remove("hidden");
  document.getElementById("contactForm").reset();
}
// Fechar popup do formulário
function closeCustomAlert() {
  document.getElementById("custom-alert").classList.add("hidden");
}
