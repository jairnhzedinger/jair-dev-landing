// ========================================
// Navigation
// ========================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

// Scroll effect for nav
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  lastScrollY = window.scrollY;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// ========================================
// Cursor Glow Effect
// ========================================
const cursorGlow = document.getElementById('cursorGlow');

document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========================================
// Stats Counter Animation
// ========================================
const animateCounter = (element, target) => {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current);
    }
  }, 30);
};

const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('[data-count]');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        animateCounter(counter, target);
      });
      statsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  statsObserver.observe(heroStats);
}

// ========================================
// Scroll Reveal Animation
// ========================================
const revealElements = document.querySelectorAll(
  '.section-header, .service-card, .project-card, .testimonial-card, .about-content'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

// ========================================
// Code Window Typing Effect
// ========================================
const codeContent = document.querySelector('.code-content code');
if (codeContent) {
  const originalHTML = codeContent.innerHTML;
  codeContent.innerHTML = '';
  
  let charIndex = 0;
  const typeCode = () => {
    if (charIndex < originalHTML.length) {
      // Handle HTML tags
      if (originalHTML[charIndex] === '<') {
        const tagEnd = originalHTML.indexOf('>', charIndex);
        codeContent.innerHTML += originalHTML.slice(charIndex, tagEnd + 1);
        charIndex = tagEnd + 1;
      } else {
        codeContent.innerHTML += originalHTML[charIndex];
        charIndex++;
      }
      setTimeout(typeCode, 15);
    }
  };
  
  // Start typing after a delay
  setTimeout(typeCode, 1000);
}

// ========================================
// Service Cards Hover Effect
// ========================================
document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// ========================================
// Project Cards Tilt Effect
// ========================================
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    card.style.transform = `
      translateY(-8px) 
      perspective(1000px) 
      rotateX(${y * -5}deg) 
      rotateY(${x * 5}deg)
    `;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) perspective(1000px) rotateX(0) rotateY(0)';
  });
});

// ========================================
// Form Validation (if contact form exists)
// ========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form handling logic here
    console.log('Form submitted');
  });
}

// ========================================
// Floating Shapes Parallax
// ========================================
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach((shape, index) => {
    const speed = 0.05 * (index + 1);
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ========================================
// Add loading animation
// ========================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

console.log('🚀 Jair Dev Landing - Scripts loaded');
