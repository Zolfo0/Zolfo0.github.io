/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
        function () {
            alert("Your message has been sent successfully!");
        },
        function (error) {
            alert("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", error);
        }
    );
});



showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});



sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

document.addEventListener("DOMContentLoaded", () => {
    const workImages = document.querySelectorAll(".work__img");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");

    // Open modal on image click
    workImages.forEach(image => {
        image.addEventListener("click", () => {
            const imgSrc = image.getAttribute("data-image");
            const description = image.getAttribute("data-description");

            modalImage.src = imgSrc;
            modalDescription.textContent = description;
            modal.style.display = "flex";
        });
    });

    // Close modal on close button click
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById("contact-button");
    const contactModal = document.getElementById("contact-modal");
    const closeModal = document.querySelector(".close");

    // Open modal on button click
    contactButton.addEventListener("click", () => {
        contactModal.style.display = "flex";
    });

    // Close modal on close button click
    closeModal.addEventListener("click", () => {
        contactModal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });

    // Form submission (mock)
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent actual form submission
        alert("Your message has been sent successfully!");
        contactModal.style.display = "none"; // Close modal
        contactForm.reset(); // Reset form fields
    });
});
