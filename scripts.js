document.addEventListener('DOMContentLoaded', function() {
    // Haetaan URL:n nimi
    const path = window.location.pathname;
    const page = path.split('/').pop(); // Ota vain tiedoston nimi

    // Poistetaan kaikki "active" luokat navigaatiosta
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === page) {
            link.classList.add('active'); // Lisää "active" luokka aktiiviselle linkille
        } else {
            link.classList.remove('active'); // Poista "active" luokka muilta linkeiltä
        }
    });
});