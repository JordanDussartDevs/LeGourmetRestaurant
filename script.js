// Animations simples (placeholder)
console.log("L’Atelier Noir — site chargé");

// Plus tard : animations scroll, effets luxe, etc.
const form = document.getElementById("reservation-form");
const confirmation = document.getElementById("confirmation");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    confirmation.textContent =
      "Votre réservation a bien été prise en compte. Nous vous contacterons rapidement.";

    form.reset();
  });
}
