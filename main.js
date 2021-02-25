// function expressions to select elements

const selectElement = (s) => document.querySelector(s);
const navLinks = document.querySelectorAll(".nav-link");

selectElement(".burger-menu-icon").addEventListener("click", () => {

    selectElement(".nav-list").classList.toggle("active");
    selectElement(".burger-menu-icon").classList.toggle("toggle")

    navLinks.forEach((link, index) => {
        if (link.style.animation){
            link.style.animation = ""
        }else{
            link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`

        }
    })
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        selectElement(".nav-list").classList.toggle("active");
        selectElement(".burger-menu-icon").classList.toggle("toggle");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = ""
            }else{
                link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`

            }
        })
    })
})
/*
// closing menu bar after clicking outside the menu bar
document.addEventListener("click", (e) =>{

    const div = document.getElementById("to_close"); // points to nav-list

    if (!div.contains(e.target)){

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
    }
})*/