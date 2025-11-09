
///WHATSAPP

document.getElementById('whatsappIcon').addEventListener('click', function() {
  const phoneNumber = '+2347011939134'; // Replace with your WhatsApp number
  const message = encodeURIComponent('Hello Dutch and Doyenne Events, I want to make a booking. My name is');
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
});



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

  
 // Wait for the page to load, then start a 1-second delay before playing the video
window.addEventListener("load", () => {
  const heroVideo = document.getElementById("heroVideo");
  const thumbnailOverlay = document.getElementById("thumbnailOverlay");

  // Start a 1-second timeout to play the video
  setTimeout(() => {
      thumbnailOverlay.style.display = "none"; // Hide the thumbnail
      heroVideo.play(); // Start the video
  }, 1000); // 1 second

  // Add a timeupdate event listener to the video
  heroVideo.addEventListener("timeupdate", () => {
      // Check if the current time has reached or exceeded 1 minute, 5 seconds
      if (heroVideo.currentTime >= 61) {
          heroVideo.currentTime = 0; // Reset the video to the beginning
          heroVideo.play(); // Replay the video
      }
  });
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



document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function nextSlide() {
      // Remove active class from current slide
      slides[currentSlide].classList.remove('active');
      
      // Move to next slide
      currentSlide = (currentSlide + 1) % slides.length;
      
      // Add flash effect and active class to new slide
      slides[currentSlide].classList.add('active', 'flash');
      
      // Remove flash class after animation completes
      setTimeout(() => {
          slides[currentSlide].classList.remove('flash');
      }, 500);
  }

  // Start the slideshow
  setInterval(nextSlide, 6000);
});


/////EXPERIENCE

document.addEventListener('DOMContentLoaded', function () {
  const counters = document.querySelectorAll('.count');
  const options = {
    threshold: 0.5
  };

  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const duration = 2000; // Duration of the counting in ms
        let start = 0;

        const increment = target / (duration / 16); // Increment value per frame

        function updateCount() {
          start += increment;
          if (start < target) {
            counter.textContent = Math.ceil(start) + (counter.textContent.includes('+') ? '+' : '');
            requestAnimationFrame(updateCount);
          } else {
            counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
          }
        }

        updateCount();
        observer.unobserve(counter); // Stop observing after animation
      }
    });
  }, options);

  counters.forEach(counter => countObserver.observe(counter));
});



//////MORE TEXT REVEAL

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optionally remove the observer after animation
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,  // Trigger when 20% of the element is visible
  rootMargin: '0px'
});

// Start observing all reveal-wrap elements
document.querySelectorAll('.reveal-wrap').forEach(wrapper => {
  observer.observe(wrapper);
});


////TESTIMONIAL


let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-wrapper');
const dots = document.querySelectorAll('.dot');
let startX = 0;
let endX = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = i === index ? 'flex' : 'none';
    dots[i].classList.toggle('active', i === index);
  });
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  showTestimonial(currentTestimonial);
}

function previousTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonial);
}

// Swipe event handlers
testimonials.forEach((testimonial) => {
  testimonial.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  testimonial.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
  });

  testimonial.addEventListener('touchend', () => {
    if (startX - endX > 50) {
      nextTestimonial(); // Swipe left
    } else if (endX - startX > 50) {
      previousTestimonial(); // Swipe right
    }
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentTestimonial = index;
    showTestimonial(currentTestimonial);
  });
});

setInterval(nextTestimonial, 6000); // Changes testimonial every 6 seconds
showTestimonial(currentTestimonial); // Initial display

/////split text for About Homepage

document.addEventListener('DOMContentLoaded', () => {
  const h2 = document.querySelector('.info2 h2');
  const text = h2.textContent;
  h2.textContent = ''; // Clear the original text
  h2.classList.add('split-text');

  // Split text into individual letters
  [...text].forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char;
    span.classList.add('split-letter');
    span.style.transitionDelay = `${i * 50}ms`; // Stagger the animation
    h2.appendChild(span);
  });

  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const letters = entry.target.querySelectorAll('.split-letter');
        letters.forEach(letter => {
          letter.classList.add('revealed');
        });
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(h2);
});



AOS.init({
  duration: 1000,
  once: true,
});
  