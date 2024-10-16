const topnav = document.querySelector(".topnav");
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () =>{
    const visibility = topnav.getAttribute("data-visible")
    
    if (visibility === "false") {
        topnav.setAttribute("data-visible", true)
        dropdown.setAttribute("aria-expanded", true)
    } else if (visibility === "true"){
        topnav.setAttribute("data-visible", false)
        dropdown.setAttribute("aria-expanded", false)
    }
})

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active");
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null);
}

if(darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () =>{
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    /* the above is the same as:
    if darkmode !== "active" if enableDarkmode() else disableDarkmode */ 
});