/**
 * Abdul Rafay — Multi-Page Executive CV & Portfolio Interactive Engine
 * 
 * 1. Reactive Background Watermark & Dynamic Atmospheric Aura
 * 2. Real-time Telemetry HUD Console & Runtime Simulation
 * 3. Frontend Kinetic Click Shockwaves & Neon Ripples
 * 4. 3D Card Mouse Perspective Tilt & Cursor Spotlight
 * 5. Interactive Skill Filters & Dynamic Color Morphing
 * 6. Elastic Certificate Lightbox Modal & ESC Dismissal
 * 7. Mobile Navigation Toggle
 */

document.addEventListener('DOMContentLoaded', () => {

  // ═════════════════════════════════════════════════════════════════
  // 1. INJECT REQUIRED GLOBAL SHELLS (AURA, WATERMARK, HUD, LIGHTBOX)
  // ═════════════════════════════════════════════════════════════════
  
  // Ambient Aura layer
  if (!document.querySelector('.ambient-aura')) {
    const aura = document.createElement('div');
    aura.className = 'ambient-aura';
    document.body.prepend(aura);
  }

  // Kinetic Watermark layer
  let watermarkText = document.querySelector('.watermark-text');
  if (!watermarkText) {
    const watermarkWrap = document.createElement('div');
    watermarkWrap.className = 'kinetic-watermark';
    watermarkWrap.innerHTML = `<span class="watermark-text" id="watermarkText">ABDUL RAFAY</span>`;
    document.body.prepend(watermarkWrap);
    watermarkText = document.getElementById('watermarkText');
  }

  // Live Backend Telemetry HUD
  let hudElement = document.getElementById('telemetryHud');
  if (!hudElement) {
    hudElement = document.createElement('aside');
    hudElement.id = 'telemetryHud';
    hudElement.className = 'telemetry-hud';
    hudElement.setAttribute('aria-live', 'polite');
    hudElement.innerHTML = `
      <div class="hud-header">
        <div class="hud-status">
          <span class="hud-indicator"></span>
          <span class="hud-title">SYSTEM MONITOR :: RUNTIME</span>
        </div>
        <span class="hud-latency" id="hudLatency">ONLINE</span>
      </div>
      <div class="hud-terminal" id="hudTerminal">
        <div class="hud-line hud-line--init">[SYS-INIT] Telemetry engine active &bull; Concurrency loop ready</div>
      </div>
    `;
    document.body.appendChild(hudElement);
  }

  // Certificate Lightbox Modal
  let lightboxModal = document.getElementById('lightboxModal');
  if (!lightboxModal) {
    lightboxModal = document.createElement('div');
    lightboxModal.id = 'lightboxModal';
    lightboxModal.className = 'lightbox-modal';
    lightboxModal.setAttribute('role', 'dialog');
    lightboxModal.setAttribute('aria-modal', 'true');
    lightboxModal.setAttribute('aria-hidden', 'true');
    lightboxModal.innerHTML = `
      <div class="lightbox-backdrop" id="lightboxBackdrop"></div>
      <div class="lightbox-dialog">
        <button class="lightbox-close" id="lightboxClose" aria-label="Close fullscreen view">&times;</button>
        <div class="lightbox-body">
          <img src="" alt="Fullscreen Certificate" class="lightbox-img" id="lightboxImg" />
          <div class="lightbox-caption">
            <h4 id="lightboxTitle"></h4>
            <p id="lightboxIssuer"></p>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(lightboxModal);
  }

  const hudTerminal = document.getElementById('hudTerminal');
  const hudLatency = document.getElementById('hudLatency');
  let hudIdleTimer = null;

  // Telemetry Log Function
  window.pushTelemetryLog = function(logMessage, isHighlight = false) {
    if (!hudTerminal) return;

    if (hudElement) hudElement.classList.add('is-active');

    // Fast simulated latency (0.8ms - 2.4ms)
    const randomLatency = (Math.random() * 1.6 + 0.8).toFixed(1) + 'ms';
    if (hudLatency) hudLatency.textContent = randomLatency;

    const line = document.createElement('div');
    line.className = 'hud-line' + (isHighlight ? ' hud-highlight' : '');
    line.innerHTML = logMessage;
    hudTerminal.appendChild(line);

    while (hudTerminal.children.length > 4) {
      hudTerminal.removeChild(hudTerminal.firstChild);
    }

    clearTimeout(hudIdleTimer);
    hudIdleTimer = setTimeout(() => {
      if (hudElement) hudElement.classList.remove('is-active');
      if (hudLatency) hudLatency.textContent = 'ONLINE';
    }, 3800);
  };


  // ═════════════════════════════════════════════════════════════════
  // 2. PAGE CONTEXT DETECTION & WATERMARK MORPHING
  // ═════════════════════════════════════════════════════════════════
  const pagePath = window.location.pathname.toLowerCase();
  let defaultWatermark = "ABDUL RAFAY";
  let activeThemeClass = "";

  if (pagePath.includes('skills')) {
    document.body.setAttribute('data-page', 'skills');
    defaultWatermark = "TECHNICAL ARSENAL";
    activeThemeClass = "theme-skills";
  } else if (pagePath.includes('experience')) {
    document.body.setAttribute('data-page', 'experience');
    defaultWatermark = "WORK & PROJECTS";
    activeThemeClass = "theme-experience";
  } else if (pagePath.includes('education')) {
    document.body.setAttribute('data-page', 'education');
    defaultWatermark = "ACADEMIC MATRIX";
    activeThemeClass = "theme-education";
  } else if (pagePath.includes('contact')) {
    document.body.setAttribute('data-page', 'contact');
    defaultWatermark = "DIRECT CHANNELS";
    activeThemeClass = "theme-contact";
  } else {
    document.body.setAttribute('data-page', 'home');
    defaultWatermark = "ABDUL RAFAY";
    activeThemeClass = "";
  }

  if (activeThemeClass) {
    document.body.classList.add(activeThemeClass);
  }

  if (watermarkText) {
    watermarkText.textContent = defaultWatermark;
  }

  let morphTimer = null;
  function morphWatermark(newText) {
    if (!watermarkText || watermarkText.textContent === newText) return;
    clearTimeout(morphTimer);
    watermarkText.classList.add('is-morphing');
    morphTimer = setTimeout(() => {
      watermarkText.textContent = newText;
      watermarkText.classList.remove('is-morphing');
    }, 200);
  }


  // ═════════════════════════════════════════════════════════════════
  // 3. REACTIVE NAVBAR DRIFT & ATMOSPHERE SHIFT ON HOVER
  // ═════════════════════════════════════════════════════════════════
  const navLinks = document.querySelectorAll('.nav-link, .nav-brand');
  const themeMap = {
    'index.html': { text: 'ABDUL RAFAY', theme: '' },
    'skills.html': { text: 'TECHNICAL ARSENAL', theme: 'theme-skills' },
    'experience.html': { text: 'WORK & PROJECTS', theme: 'theme-experience' },
    'education.html': { text: 'ACADEMIC MATRIX', theme: 'theme-education' },
    'contact.html': { text: 'DIRECT CHANNELS', theme: 'theme-contact' }
  };

  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const match = themeMap[href];

    if (match) {
      link.addEventListener('mouseenter', () => {
        morphWatermark(match.text);
        // Temporarily shift atmospheric glow
        document.body.classList.remove('theme-skills', 'theme-experience', 'theme-education', 'theme-contact');
        if (match.theme) document.body.classList.add(match.theme);
      });

      link.addEventListener('mouseleave', () => {
        morphWatermark(defaultWatermark);
        document.body.classList.remove('theme-skills', 'theme-experience', 'theme-education', 'theme-contact');
        if (activeThemeClass) document.body.classList.add(activeThemeClass);
      });
    }
  });


  // ═════════════════════════════════════════════════════════════════
  // 4. FRONTEND KINETIC CLICK SHOCKWAVE RIPPLES
  // ═════════════════════════════════════════════════════════════════
  const rippleSelectors = [
    '.btn',
    '.nav-link',
    '.contact-chip',
    '.quick-hub-card',
    '.pill',
    '.timeline-card',
    '.edu-card',
    '.contact-box',
    '.cert-card',
    '.filter-btn',
    '.hero-photo-ring'
  ];

  document.querySelectorAll(rippleSelectors.join(',')).forEach(el => {
    el.classList.add('has-ripple');

    el.addEventListener('mousedown', (e) => {
      const rect = el.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'click-ripple';

      const size = Math.max(rect.width, rect.height) * 2.2;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      el.appendChild(ripple);
      setTimeout(() => ripple.remove(), 750);

      // Trigger contextual telemetry based on clicked element
      const text = el.textContent.trim();
      if (el.classList.contains('pill')) {
        pushTelemetryLog(`<strong>[STACK-NODE]</strong> Verified capability: <code>${text}</code>`, false);
      } else if (el.classList.contains('nav-link')) {
        pushTelemetryLog(`<strong>[ROUTER]</strong> Navigating to: <strong>${text}</strong>`, true);
      } else if (el.classList.contains('contact-box') || el.classList.contains('contact-chip')) {
        pushTelemetryLog(`<strong>[HANDSHAKE]</strong> External communication bridge active`, true);
      } else if (el.classList.contains('timeline-card')) {
        pushTelemetryLog(`<strong>[OPERATIONS]</strong> Queried commercial track record record`, false);
      } else if (el.classList.contains('edu-card')) {
        pushTelemetryLog(`<strong>[ACADEMIC]</strong> Qarshi University BSCS verification valid`, false);
      } else if (el.classList.contains('hero-photo-ring')) {
        pushTelemetryLog(`<strong>[IDENTITY]</strong> Abdul Rafay :: CS Candidate :: Lahore, PK`, true);
      }
    });
  });


  // ═════════════════════════════════════════════════════════════════
  // 5. 3D CARD MOUSE PERSPECTIVE TILT & SPOTLIGHT ILLUMINATION
  // ═════════════════════════════════════════════════════════════════
  const tiltCards = document.querySelectorAll(
    '.quick-hub-card, .content-card, .timeline-card, .edu-card, .contact-box, .cert-card'
  );

  tiltCards.forEach(card => {
    let spotlight = card.querySelector('.card-spotlight');
    if (!spotlight) {
      spotlight = document.createElement('div');
      spotlight.className = 'card-spotlight';
      card.appendChild(spotlight);
    }

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.018, 1.018, 1.018)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });


  // ═════════════════════════════════════════════════════════════════
  // 6. INTERACTIVE SKILL FILTERS (ON SKILLS.HTML)
  // ═════════════════════════════════════════════════════════════════
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.content-card[data-category]');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-filter');

        // Update active filter button
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        // Filter cards
        skillCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (cat === 'all' || cardCat === cat) {
            card.classList.remove('is-hidden');
            card.classList.remove('is-filtered');
            void card.offsetWidth; // Force reflow
            card.classList.add('is-filtered');
          } else {
            card.classList.add('is-hidden');
          }
        });

        // Trigger dynamic aura color shift based on filter
        document.body.classList.remove('theme-skills', 'theme-experience', 'theme-education', 'theme-contact');
        if (cat === 'cs') {
          document.body.classList.add('theme-skills');
          pushTelemetryLog(`<strong>[FILTER-ENG]</strong> Categorized view: Core CS &amp; Systems :: High priority`, true);
        } else if (cat === 'web') {
          document.body.classList.add('theme-experience');
          pushTelemetryLog(`<strong>[FILTER-ENG]</strong> Categorized view: Web &amp; Frontend Architecture`, true);
        } else if (cat === 'growth') {
          document.body.classList.add('theme-education');
          pushTelemetryLog(`<strong>[FILTER-ENG]</strong> Categorized view: E-Commerce &amp; Growth Systems`, true);
        } else {
          document.body.classList.add('theme-skills');
          pushTelemetryLog(`<strong>[FILTER-ENG]</strong> Showing full stack matrix (All 21 competencies)`, false);
        }
      });
    });
  }


  // ═════════════════════════════════════════════════════════════════
  // 7. ELASTIC CERTIFICATE LIGHTBOX MODAL
  // ═════════════════════════════════════════════════════════════════
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxIssuer = document.getElementById('lightboxIssuer');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const certTriggers = document.querySelectorAll('.cert-card, .cert-thumb-box');

  function openLightbox(fullSrc, title, issuer) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = fullSrc;
    lightboxImg.alt = title;
    if (lightboxTitle) lightboxTitle.textContent = title;
    if (lightboxIssuer) lightboxIssuer.textContent = issuer;

    lightboxModal.classList.add('is-open');
    lightboxModal.setAttribute('aria-hidden', 'false');

    pushTelemetryLog(`<strong>[STORAGE-CDN]</strong> Lightbox opened: <em>${title}</em>`, true);
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('is-open');
    lightboxModal.setAttribute('aria-hidden', 'true');
    pushTelemetryLog(`<strong>[STORAGE-CDN]</strong> Lightbox modal closed`, false);
  }

  certTriggers.forEach(card => {
    card.addEventListener('click', () => {
      const fullSrc = card.getAttribute('data-full') || './certs/cert1.png';
      const title = card.getAttribute('data-title') || 'Certificate of Completion';
      const issuer = card.getAttribute('data-issuer') || 'Google &bull; Offered through Coursera';
      openLightbox(fullSrc, title, issuer);
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('is-open')) {
      closeLightbox();
    }
  });


  // ═════════════════════════════════════════════════════════════════
  // 8. INITIAL PAGE WELCOME TELEMETRY
  // ═════════════════════════════════════════════════════════════════
  setTimeout(() => {
    if (pagePath.includes('skills')) {
      pushTelemetryLog('<strong>[READY]</strong> Skills Module active &bull; Filter categories ready', true);
    } else if (pagePath.includes('experience')) {
      pushTelemetryLog('<strong>[READY]</strong> Commercial &amp; Engineering portfolio verified', true);
    } else if (pagePath.includes('education')) {
      pushTelemetryLog('<strong>[READY]</strong> Academic records indexed &bull; Qarshi University BSCS', true);
    } else if (pagePath.includes('contact')) {
      pushTelemetryLog('<strong>[READY]</strong> Direct communication gateway initialized', true);
    } else {
      pushTelemetryLog('<strong>[READY]</strong> Abdul Rafay Executive Multi-Page Hub loaded', true);
    }
  }, 400);

});

// Global Mobile Nav Toggle
function toggleNav() {
  const hb = document.querySelector('.hamburger');
  const nl = document.getElementById('navLinks');
  if (!hb || !nl) return;
  const exp = hb.getAttribute('aria-expanded') === 'true';
  hb.setAttribute('aria-expanded', !exp);
  hb.classList.toggle('is-active');
  nl.classList.toggle('is-open');
}
