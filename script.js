
// JavaScript to handle menu open and close functionality
document.getElementById("menuIcon").addEventListener("click", function () {
    document.getElementById("navigation").classList.add("open");
  });
  
  document.getElementById("closeIcon").addEventListener("click", function () {
    document.getElementById("navigation").classList.remove("open");
  });
  
  // Add background to header on scroll
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });


  // Add background to header on scroll Desktop
  window.addEventListener("scroll", function () {
    const header = document.getElementById("heading");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
  



  ///////FOR HEROSECTION

  
  // Wait for the page to load, then start a 4-second delay before playing the video
window.addEventListener("load", () => {
    const heroVideo = document.getElementById("heroVideo");
    const thumbnailOverlay = document.getElementById("thumbnailOverlay");
  
    // Start a 4-second timeout to play the video
    setTimeout(() => {
      thumbnailOverlay.style.display = "none"; // Hide the thumbnail
      heroVideo.play(); // Start the video
    }, 1000); // 4 seconds
});


/////FOR INTRO 


document.addEventListener('DOMContentLoaded', () => {
  const h2Element = document.querySelector('.int h2');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const elementTop = h2Element.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      h2Element.classList.add('reveal');
      window.removeEventListener('scroll', revealOnScroll); // Remove listener after revealing
    }
  }

  window.addEventListener('scroll', revealOnScroll);
});

  