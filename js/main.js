/* ═══════════════════════════════════════════════
   MinePulse — JavaScript: Navigation, Animations,
   Form handling, Asset counter simulation
   ═══════════════════════════════════════════════ */

/* ── Navbar: scroll effect + mobile toggle ── */
const navbar   = document.getElementById('navbar');
const burger   = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('active');
});

// Close mobile nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('active');
  });
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${entry.target.id}`) {
          a.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

/* ── Animate on scroll: fade-in-up ── */
const animTargets = document.querySelectorAll(
  '.pillar-card, .arch-step, .industry-card, .roadmap-step, ' +
  '.plan-card, .roi-result, .about-badge, .cost-item'
);

const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
      }, i * 80);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animTargets.forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  fadeObserver.observe(el);
});

/* ── Dashboard live counter simulation ── */
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const kpiActive    = document.querySelector('.kpi-value.green');
const kpiSavings   = document.querySelector('.kpi-value.gold');

setInterval(() => {
  if (kpiActive) {
    const v = randomBetween(95, 101);
    kpiActive.textContent = v;
  }
  if (kpiSavings) {
    const s = randomBetween(5000, 5500);
    kpiSavings.textContent = `$${s.toLocaleString()}`;
  }
}, 4000);

/* ── Cost bars: animate on scroll ── */
const costBars = document.querySelectorAll('.cost-bar');
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target.style.width;
      entry.target.style.width = '0';
      requestAnimationFrame(() => {
        setTimeout(() => {
          entry.target.style.transition = 'width 1s ease';
          entry.target.style.width = target;
        }, 100);
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
costBars.forEach(b => barObserver.observe(b));

/* ── ROI counter animation ── */
function animateCounter(el, target, prefix = '', suffix = '') {
  let current = 0;
  const step  = target / 60;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
  }, 20);
}

const roiValue = document.querySelector('.roi-result-value');
const roiObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(roiValue, 128000, '$');
      roiObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
if (roiValue) roiObserver.observe(roiValue);

/* ── Contact form submit ── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    const original = btn.textContent;
    btn.textContent = '✓ Request Sent! We\'ll contact you within 24 hours.';
    btn.style.background = 'var(--green)';
    btn.style.color      = '#fff';
    btn.style.borderColor= 'var(--green)';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent  = original;
      btn.style.background = '';
      btn.style.color      = '';
      btn.style.borderColor= '';
      btn.disabled = false;
      form.reset();
    }, 5000);
  });
}

/* ── Smooth scroll for all anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});
