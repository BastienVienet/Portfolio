const navSlide = () => {
    // Variables
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Event listener on the burger button
    burger.addEventListener('click', () => {

        // Toggle the nav bar
        nav.classList.toggle('nav-active');

        //Animate the links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""

            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards calc(${index / 4}s + 0.25s)`
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle')
    });
}

// Calling the function
navSlide();