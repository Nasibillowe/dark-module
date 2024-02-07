function toggleMode() {
    var body = document.body;
    var title = document.getElementById('title');
    var button = document.getElementById('modeButton');

    body.classList.toggle('dark-mode');
    var isDarkMode = body.classList.contains('dark-mode');

    title.innerHTML = isDarkMode ? "Kechki Rejim" : "Kunduzgi Rejim";
    button.innerHTML = isDarkMode ? "Kunduzgi Rejim" : "Kechki Rejim";
}
function toggleMode() {
    var body = document.body;
    var title = document.getElementById('title');
    var button = document.getElementById('modeButton');

    body.classList.toggle('dark-mode');
    var isDarkMode = body.classList.contains('dark-mode');

    title.innerHTML = isDarkMode ? "Kechki Rejim" : "Kunduzgi Rejim";
    button.innerHTML = isDarkMode ? "Kunduzgi Rejim" : "Kechki Rejim";

    // Yangi qo'shilgan qator:
    console.log('Rejim o\'zgargan! Yangi holat: ' + (isDarkMode ? 'Kechki' : 'Kunduzgi'));
}
  document.addEventListener('contextmenu', function (p) {
    p.preventDefault();
    alert("kod ni ko'chirma o'zing yoz !!!");
});

