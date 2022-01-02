function openTab(tabRef){
    document.getElementById("work-profile-section").classList.add("hidden")
    document.getElementById("portfolio-section").classList.add("hidden")
    document.getElementById("contact-section").classList.add("hidden")

    document.querySelectorAll('[data-for="work-profile-section"]')[0].classList.remove("active");
    document.querySelectorAll('[data-for="portfolio-section"]')[0].classList.remove("active");
    document.querySelectorAll('[data-for="contact-section"]')[0].classList.remove("active");

    document.getElementById(tabRef).classList.remove("hidden");
    document.querySelectorAll(`[data-for="${tabRef}"]`)[0].classList.add("active");
}