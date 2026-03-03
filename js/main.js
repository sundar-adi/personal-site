/* ============================================
   ADI SUNDAR — PERSONAL WEBSITE
   JavaScript: Scroll Animations, Nav, Smooth UX
   ============================================ */

// --- Navbar scroll effect ---
const nav = document.getElementById('nav');

function handleNavScroll() {
  if (window.scrollY > 80) {
    nav.classList.add('nav--scrolled');
  } else {
    // Only remove on pages with hero (index)
    if (document.querySelector('.hero')) {
      nav.classList.remove('nav--scrolled');
    }
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll(); // Run on load

// --- Mobile nav toggle ---
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navClose = document.getElementById('navClose');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  });
}

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// --- Scroll-triggered fade-up animations ---
const fadeElements = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => fadeObserver.observe(el));

// --- Smooth scroll for anchor links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const navHeight = nav.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// --- Active nav link highlight ---
const sections = document.querySelectorAll('section[id]');

function highlightNav() {
  const scrollY = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav__links a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.style.opacity = '1';
      } else {
        navLink.style.opacity = '';
      }
    }
  });
}

window.addEventListener('scroll', highlightNav, { passive: true });

// --- Staggered hero entrance animation ---
(function() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Small delay to let the browser paint the initial hidden state,
  // then trigger the cascade by adding the loaded class
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      hero.classList.add('hero--loaded');

      // Stagger each stat pill individually for a popcorn effect
      const stats = hero.querySelectorAll('.hero-stat');
      stats.forEach((stat, i) => {
        setTimeout(() => {
          stat.classList.add('hero-stat--visible');
        }, 500 + i * 100); // starts at 500ms, each pill 100ms apart
      });
    });
  });
})();

// --- Rotating hero words ---
(function() {
  const words = document.querySelectorAll('.rotating-word');
  if (!words.length) return;

  let currentIndex = 0;
  const interval = 2500; // ms between rotations

  setInterval(() => {
    const current = words[currentIndex];
    const nextIndex = (currentIndex + 1) % words.length;
    const next = words[nextIndex];

    // Slide current word up and out
    current.classList.remove('active');
    current.classList.add('exit-up');

    // Slide next word up into view
    next.classList.add('active');

    // Clean up the exited word after transition
    setTimeout(() => {
      current.classList.remove('exit-up');
    }, 500);

    currentIndex = nextIndex;
  }, interval);
})();
