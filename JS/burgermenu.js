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

//Fixing bug of the slide when we switch from the desktop view to the mobile view
//let x = window.matchMedia("(max-width: 800)")
//const burger = document.querySelector('.burger');

/*
if (x.matches) {
    burger.addEventListener('click', () => {
        if (burger.classList.contains('toggle')) { */
/* document.getElementsByClassName("nav-links").style.display = 'flex'; */
/* let links = document.getElementsByClassName("nav-links")
for (let link of links) {
    link.style.display = 'flex'
}
} else { */
/* document.getElementsByClassName("nav-links").style.display = 'none'; */
/* let links = document.getElementsByClassName("nav-links")
for (let link of links) {
    link.style.display = 'none'
}
}
})
} */

//if (x.matches) {
    //let links = document.getElementsByClassName("nav-links")
    //for (let link of links) {
      //  link.style.display = 'none'
    //}
//}