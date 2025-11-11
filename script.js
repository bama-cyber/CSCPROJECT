// This waits for the HTML page to be fully loaded
// before trying to find any elements.
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. FORM CODE GUARD ---
    // It only runs this code if it finds an element with id="myForm"
    const form = document.getElementById("myForm");
    if (form) {
    
    // All your form variables
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("messageError");
    
    form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop the form
    let valid = true;
    let inputArray = [];
    
    // Clear previous error messages
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    
    // Name check
    if (nameInput.value.trim() === "") {
    nameError.textContent = 'Hey! What is your name?.';
    valid = false;
    setTimeout(() => { nameError.textContent = "" }, 3000);
    } else {
    inputArray.push({ name: nameInput.value });
    }
    
    // Email check
    if (emailInput.value.trim() === "") {
    emailError.textContent = 'Please provide your email address.';
    valid = false;
    setTimeout(() => { emailError.textContent = "" }, 3000);
    } else {
    inputArray.push({ email: emailInput.value });
    }
    
    // (Add your message validation here)
    
    // Final check
    if (valid) {
    alert("Form submitted successfully!");
    form.reset();
    console.log(inputArray);
    }
    });
    }
    
    // --- 2. HAMBURGER MENU CODE ---
    // It only runs this code if it finds the hamburger
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector("header nav ul");
    
    if (hamburgerMenu && navLinks) {
    hamburgerMenu.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.toggle("active");
    });
    }
    
    // --- 3. SCROLL REVEAL CODE ---
    // It only runs this code if ScrollReveal is loaded
    if (typeof ScrollReveal === 'function') {
    ScrollReveal().reveal('.reveal', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    opacity: 0,
    easing: 'ease-in-out'
    });
    }
    
    // --- 4. SLIDESHOW CODE (FOR GALLERY PAGE) ---
    // It only runs this code if it finds slides
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    if (slides.length > 0) {
    let slideIndex = 1; // slideIndex is now local
    
    // We must attach these functions to the window
    // so your "onclick" HTML can find them.
    window.plusSlides = function(n) {
    showSlides(slideIndex += n);
    }
    
    window.currentSlide = function(n) {
    showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    }
    
    // Start the slideshow
    showSlides(slideIndex);
    }
    
    }); 
    