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
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar .links a');

    function changeLinkState() {
        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }

    changeLinkState();
    window.addEventListener('scroll', changeLinkState);
});

