document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const gora = document.querySelector('.dogory');
        if (window.scrollY >= 5) {
            navbar.classList.add("scrollowany");
            gora.classList.add("scrollowany");
        } else {
            navbar.classList.remove("scrollowany");
            gora.classList.remove("scrollowany");
        }
        console.log('Current classes on navbar:', navbar.className); // Dodaj ten wiersz
    });
});
document.addEventListener('DOMContentLoaded', function() {
    let anchorSelector = 'a[href^="#"]';
    let anchorList = document.querySelectorAll(anchorSelector);
    anchorList.forEach(link => {link.onclick = function (e){
        e.preventDefault();
        let destination = document.querySelector(this.hash);
        destination.scrollIntoView({behavior: 'smooth'});
    }})
})
document.addEventListener('DOMContentLoaded', function() {
    // Select all sections with the relevant classes
    const sections = document.querySelectorAll('.top, .about, .work, .realizacje, .contact');
    const navLinks = document.querySelectorAll('.navbar .links a');

    // Function to determine which section is currently in view
    function getActiveSection() {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.classList[0]; // Get the first class name
            }
        });
        return currentSection;
    }

    // Function to update the active state of the navigation links
    function changeLinkState() {
        const activeSection = getActiveSection();
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(activeSection)) {
                link.classList.add('active');
            }
        });
    }

    // Initial check
    changeLinkState();

    // Add scroll event listener
    window.addEventListener('scroll', changeLinkState);
});
