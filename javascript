// script.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio real do formulário
        alert("Mensagem enviada com sucesso!");
        form.reset(); // Reseta o formulário após o envio
    });
});
