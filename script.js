document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY >= 5) {
            navbar.classList.add("scrollowany");
        } else {
            navbar.classList.remove("scrollowany");
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

