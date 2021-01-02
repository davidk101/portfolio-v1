// function expressions to select elements

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => { // adding on click event to hamburger icon
    selectElement(".nav-list").classList.toggle("active"); // adds and removes  'active' class on trigger
    selectElement(".burger-menu-icon").classList.toggle("toggle"); // adds and removes  'toggle' class on trigger

    // links display delay
    navLinks.forEach((link, index) =>{

        if (link.style.animation){
            link.style.animation ="";
        }
        else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${index/7 + 0.5}s`
        }
    })
});

// closing menu bar after moving to desired page
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        // links display delay
        navLinks.forEach((link, index) =>{

            if (link.style.animation){
                link.style.animation =""; // resets animation to empty string if it exists
            }
            else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${index/7 + 0.5}s`
            }
        })
    })
})