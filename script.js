document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // 2. Interactive Ingredients Check
  const checkboxes = document.querySelectorAll('.checkbox-container input[type="checkbox"]');
  
  checkboxes.forEach(chk => {
    chk.addEventListener('change', function() {
      // Logic handled via CSS (:checked), but we can add sound effects or animations here if we wanted
      if(this.checked) {
        // Optional: Maybe fade out the item slightly?
        this.parentElement.style.opacity = "0.7";
      } else {
        this.parentElement.style.opacity = "1";
      }
    });
  });

  // 3. Smooth Scroll for Anchor Links (safeguard for older browsers mostly, CSS handles modern)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Close mobile menu if open
          if (navLinks.classList.contains('active')) {
             navLinks.classList.remove('active');
          }
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });

});
