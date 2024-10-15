let currentProjectIndex = 0;
const projectUrls = [
    "../resto_template/HTML/restaurant.html",
    "../barber_template/HTML/barber.html",
    "../garage_template/HTML/garage.html",
    "../garage_template/HTML/garage2.html"
];

function openProjectPopup(index) {
    currentProjectIndex = index;
    const popup = document.getElementById("projectPopup");
    const iframe = document.getElementById("popupIframe");
    iframe.src = projectUrls[index];
    popup.style.display = "flex"; 
}

function closeProjectPopup() {
    const popup = document.getElementById("projectPopup");
    const iframe = document.getElementById("popupIframe");
    iframe.src = ""; 
    popup.style.display = "none";
}

function nextProject() {
    currentProjectIndex = (currentProjectIndex + 1) % projectUrls.length;
    document.getElementById("popupIframe").src = projectUrls[currentProjectIndex];
}

function previousProject() {
    currentProjectIndex = (currentProjectIndex - 1 + projectUrls.length) % projectUrls.length;
    document.getElementById("popupIframe").src = projectUrls[currentProjectIndex];
}

document.addEventListener("scroll", function() {
    var sections = document.querySelectorAll("section");
    var navLinks = document.querySelectorAll(".nav-link");

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop - 100;
        var sectionHeight = section.offsetHeight;
        var scrollPosition = window.scrollY;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            var currentId = section.getAttribute("id");
            navLinks.forEach(function(link) {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(currentId)) {
                    link.classList.add("active");
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("SMtd3raQv-lBlSyUv"); 

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const serviceID = 'service_tcrq5ix'; 
        const templateID = 'template_17tai3g'; 

        emailjs.sendForm(serviceID, templateID, this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message envoyé avec succès!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Échec de l\'envoi du message.');
        });
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById("projectPopup").addEventListener("click", function(event) {
//         const popupContent = document.querySelector(".popup-content");
//         if (!popupContent.contains(event.target)) {
//             closeProjectPopup(); // Ferme la popup
//         }
//     });
//     let experienceAnimated = false;
    
//     gsap.from(".container .scroll-animation", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    
//     gsap.from("#experience .article-container article", { opacity: 0, x: -50, stagger: 0.2, duration: 0.8, delay: 1 });
    
//     gsap.from("#projects .details-container", { opacity: 0, y: 30, stagger: 0.2, duration: 1, delay: 1.5 });
    
//     gsap.from('.logo', { opacity: 0, duration: 1, delay: 0.5, y: -30, ease: 'power2.out' });
//     gsap.from('.nav-list li', { opacity: 0, duration: 1, delay: 0.8, stagger: 0.2, ease: 'power2.out' });
    
//     document.addEventListener("scroll", function () {
//         const experienceSection = document.getElementById("experience");
//         const rect = experienceSection.getBoundingClientRect();
        
//         if (rect.top < window.innerHeight && rect.bottom > 0 && !experienceAnimated) {
//             experienceAnimated = true;
            
//             gsap.to(experienceSection, { opacity: 1, duration: 1, ease: "power2.out" });
            
//             const experienceTitle = experienceSection.querySelector(".title");
//             gsap.to(experienceTitle, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
            
//             const experienceArticles = document.querySelectorAll("#experience .article-container article");
//             experienceArticles.forEach((article, index) => {
//                 gsap.to(article, { opacity: 1, x: 0, duration: 0.8, ease: "power2.out", delay: index * 0.2 });
//             });
//         }
//     });
// });



// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }


