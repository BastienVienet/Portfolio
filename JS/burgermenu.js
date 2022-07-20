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

/* Fixing bug of the slide when we switch from the desktop view to the mobile view
   Still in thinking progress because it breaks the animation afterwards
   + Can't switch from mobile to desktop */
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
    if (burger.classList.contains('toggle')) {
        let links = document.getElementsByClassName('nav-links')
        for (let link of links) {
            link.style.display = 'flex'
        }
    } else {
        let links = document.getElementsByClassName('nav-links')
        for (let link of links) {
            link.style.display = 'none'
        }
    }
})