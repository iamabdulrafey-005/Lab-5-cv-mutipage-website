/**
 * Abdul Rafay — Multi-Page Executive CV & Portfolio Interactive Engine
 * 
 * 1. 10-Second Event Color Overdrive System (Frontend & Backend Synced)
 * 2. Section Live Background Animation Canvas Engine
 * 3. Mouse Drag Chromatic Flow Interaction
 * 4. Reactive Background Watermark & Dynamic Atmospheric Aura
 * 5. Real-time Telemetry HUD Console & Runtime Simulation
 * 6. Frontend Kinetic Click Shockwaves & Neon Ripples
 * 7. 3D Card Mouse Perspective Tilt & Cursor Spotlight
 * 8. Interactive Skill Filters & Dynamic Color Morphing
 * 9. Elastic Certificate Lightbox Modal & ESC Dismissal
 * 10. Mobile Navigation Toggle
 */

document.addEventListener('DOMContentLoaded', () => {

  // ═════════════════════════════════════════════════════════════════
  // 1. INJECT GLOBAL SHELLS (AURA, WATERMARK, HUD, CANVAS, SPOTLIGHT)
  // ═════════════════════════════════════════════════════════════════
  
  // Ambient Aura layer
  if (!document.querySelector('.ambient-aura')) {
    const aura = document.createElement('div');
    aura.className = 'ambient-aura';
    document.body.prepend(aura);
  }

  // Overdrive Aura layer
  if (!document.getElementById('overdriveAura')) {
    const odAura = document.createElement('div');
    odAura.id = 'overdriveAura';
    odAura.className = 'overdrive-aura';
    odAura.setAttribute('aria-hidden', 'true');
    document.body.prepend(odAura);
  }

  // Live Background Animation Canvas
  let canvas = document.getElementById('sectionLiveCanvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'sectionLiveCanvas';
    canvas.className = 'live-bg-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    document.body.prepend(canvas);
  }

  // Mouse Drag Chromatic Spotlight
  let dragSpotlight = document.getElementById('mouseDragSpotlight');
  if (!dragSpotlight) {
    dragSpotlight = document.createElement('div');
    dragSpotlight.id = 'mouseDragSpotlight';
    dragSpotlight.className = 'mouse-drag-spotlight';
    dragSpotlight.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dragSpotlight);
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
          <span class="hud-countdown" id="hudCountdown">10s OVERDRIVE</span>
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
  const hudCountdown = document.getElementById('hudCountdown');
  let hudIdleTimer = null;

  // Telemetry Log Function
  window.pushTelemetryLog = function(logMessage, isHighlight = false) {
    if (!hudTerminal) return;

    if (hudElement) hudElement.classList.add('is-active');

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
      if (hudElement && !document.body.classList.contains('is-overdrive')) {
        hudElement.classList.remove('is-active');
        if (hudLatency) hudLatency.textContent = 'ONLINE';
      }
    }, 4000);
  };


  // ═════════════════════════════════════════════════════════════════
  // 2. 10-SECOND EVENT COLOR OVERDRIVE SYSTEM (FRONTEND & BACKEND)
  // ═════════════════════════════════════════════════════════════════
  let overdriveTimer = null;
  let countdownInterval = null;
  let remainingSeconds = 10;
  let activeFocusCard = null;

  function triggerOverdrive(category, element = null) {
    clearTimeout(overdriveTimer);
    clearInterval(countdownInterval);

    // Remove focus glow from any previously focused card
    if (activeFocusCard) {
      activeFocusCard.classList.remove('section-overdrive-focus');
    }

    // Set active overdrive theme
    document.body.setAttribute('data-overdrive', category);
    document.body.classList.add('is-overdrive');

    // Focus target card or closest card
    if (element) {
      const targetCard = element.closest('.content-card, .timeline-card, .edu-card, .contact-box, .cert-card, .quick-hub-card') || element;
      targetCard.classList.add('section-overdrive-focus');
      activeFocusCard = targetCard;
    }

    // Set background animation mode to matched section
    currentSectionMode = category;

    // Watermark burst
    if (watermarkText) {
      watermarkText.classList.remove('is-pulsing');
      void watermarkText.offsetWidth; // force reflow
      watermarkText.classList.add('is-pulsing');
    }

    // Update HUD Countdown badge
    remainingSeconds = 10;
    if (hudCountdown) {
      hudCountdown.textContent = `${remainingSeconds}s OVERDRIVE`;
      hudCountdown.classList.add('is-active');
    }

    pushTelemetryLog(`<strong>[OVERDRIVE: 10s]</strong> ${category.toUpperCase()} ACTIVE :: Shaders &amp; theme synchronized`, true);

    // 1-second interval countdown
    countdownInterval = setInterval(() => {
      remainingSeconds--;
      if (hudCountdown) {
        hudCountdown.textContent = `${remainingSeconds}s OVERDRIVE`;
      }

      if (remainingSeconds <= 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);

    // Auto-reset after exactly 10 seconds
    overdriveTimer = setTimeout(() => {
      document.body.removeAttribute('data-overdrive');
      document.body.classList.remove('is-overdrive');

      if (activeFocusCard) {
        activeFocusCard.classList.remove('section-overdrive-focus');
        activeFocusCard = null;
      }

      if (hudCountdown) {
        hudCountdown.classList.remove('is-active');
      }

      pushTelemetryLog(`<strong>[OVERDRIVE COMPLETE]</strong> 10s window elapsed :: Returning to standard baseline`, false);
    }, 10000);
  }


  // ═════════════════════════════════════════════════════════════════
  // 3. SECTION-SPECIFIC LIVE BACKGROUND CANVAS ANIMATION
  // ═════════════════════════════════════════════════════════════════
  let ctx = null;
  let canvasWidth = 0;
  let canvasHeight = 0;
  let particles = [];
  let currentSectionMode = 'home';

  if (canvas) {
    ctx = canvas.getContext('2d');

    function resizeCanvas() {
      canvasWidth = window.innerWidth;
      canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      initParticles();
    }

    function initParticles() {
      particles = [];
      const particleCount = Math.floor(Math.min(canvasWidth, 1200) / 24);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          vx: (Math.random() - 0.5) * 0.7,
          vy: (Math.random() - 0.5) * 0.7,
          radius: Math.random() * 2 + 1,
          alpha: Math.random() * 0.35 + 0.15
        });
      }
    }

    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();

    function renderCanvas() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      const isOverdrive = document.body.classList.contains('is-overdrive');
      const speedMultiplier = isOverdrive ? 2.3 : 1;

      // Color hues per section
      let baseHue = 45; // Gold default
      if (currentSectionMode === 'skills') baseHue = 195; // Cyan
      else if (currentSectionMode === 'experience') baseHue = 345; // Rose/Crimson
      else if (currentSectionMode === 'certs' || currentSectionMode === 'certificates') baseHue = 155; // Emerald
      else if (currentSectionMode === 'education') baseHue = 220; // Blue
      else if (currentSectionMode === 'contact') baseHue = 315; // Magenta

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (currentSectionMode === 'skills') {
          // Matrix digital data drift upward
          p.y -= (p.radius * 0.75) * speedMultiplier;
          if (p.y < 0) p.y = canvasHeight;
        } else if (currentSectionMode === 'experience') {
          // Horizontal high-speed telemetry pulse
          p.x += (p.radius * 1.3) * speedMultiplier;
          if (p.x > canvasWidth) p.x = 0;
        } else {
          // Organic drift
          p.x += p.vx * speedMultiplier;
          p.y += p.vy * speedMultiplier;
          if (p.x < 0) p.x = canvasWidth;
          if (p.x > canvasWidth) p.x = 0;
          if (p.y < 0) p.y = canvasHeight;
          if (p.y > canvasHeight) p.y = 0;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (isOverdrive ? 1.4 : 1), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${baseHue}, 90%, 65%, ${p.alpha * (isOverdrive ? 1.6 : 1)})`;
        ctx.shadowBlur = isOverdrive ? 14 : 5;
        ctx.shadowColor = `hsla(${baseHue}, 90%, 60%, 0.8)`;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Connecting constellation threads in home & education modes
        if (currentSectionMode === 'home' || currentSectionMode === 'about' || currentSectionMode === 'education') {
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 90) {
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `hsla(${baseHue}, 90%, 65%, ${(1 - dist / 90) * 0.15 * (isOverdrive ? 2 : 1)})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      requestAnimationFrame(renderCanvas);
    }

    requestAnimationFrame(renderCanvas);
  }


  // ═════════════════════════════════════════════════════════════════
  // 4. MOUSE DRAG CHROMATIC INTERACTION (LIQUID PRISMATIC FLOW)
  // ═════════════════════════════════════════════════════════════════
  let isDragging = false;
  let dragHue = 45;

  document.addEventListener('mousedown', (e) => {
    if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;
    isDragging = true;
    document.body.classList.add('is-mouse-dragging');
    updateDragPosition(e);
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateDragPosition(e);
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      document.body.classList.remove('is-mouse-dragging');
    }
  });

  function updateDragPosition(e) {
    if (dragSpotlight) {
      dragSpotlight.style.left = `${e.clientX}px`;
      dragSpotlight.style.top = `${e.clientY}px`;
    }

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
    dragHue = (angle + 360) % 360;

    document.body.style.setProperty('--drag-hue', dragHue.toFixed(1));
    document.body.style.setProperty('--drag-angle', `${angle.toFixed(1)}deg`);
  }


  // ═════════════════════════════════════════════════════════════════
  // 5. PAGE CONTEXT DETECTION & WATERMARK MORPHING
  // ═════════════════════════════════════════════════════════════════
  const pagePath = window.location.pathname.toLowerCase();
  let defaultWatermark = "ABDUL RAFAY";
  let activeThemeClass = "";

  if (pagePath.includes('skills')) {
    document.body.setAttribute('data-page', 'skills');
    defaultWatermark = "TECHNICAL ARSENAL";
    activeThemeClass = "theme-skills";
    currentSectionMode = 'skills';
  } else if (pagePath.includes('experience')) {
    document.body.setAttribute('data-page', 'experience');
    defaultWatermark = "WORK & PROJECTS";
    activeThemeClass = "theme-experience";
    currentSectionMode = 'experience';
  } else if (pagePath.includes('education')) {
    document.body.setAttribute('data-page', 'education');
    defaultWatermark = "ACADEMIC MATRIX";
    activeThemeClass = "theme-education";
    currentSectionMode = 'education';
  } else if (pagePath.includes('contact')) {
    document.body.setAttribute('data-page', 'contact');
    defaultWatermark = "DIRECT CHANNELS";
    activeThemeClass = "theme-contact";
    currentSectionMode = 'contact';
  } else {
    document.body.setAttribute('data-page', 'home');
    defaultWatermark = "ABDUL RAFAY";
    activeThemeClass = "";
    currentSectionMode = 'home';
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
  // 6. REACTIVE NAVBAR DRIFT & ATMOSPHERE SHIFT ON HOVER
  // ═════════════════════════════════════════════════════════════════
  const navLinks = document.querySelectorAll('.nav-link, .nav-brand');
  const themeMap = {
    'index.html': { text: 'ABDUL RAFAY', theme: '', cat: 'about' },
    'skills.html': { text: 'TECHNICAL ARSENAL', theme: 'theme-skills', cat: 'skills' },
    'experience.html': { text: 'WORK & PROJECTS', theme: 'theme-experience', cat: 'experience' },
    'education.html': { text: 'ACADEMIC MATRIX', theme: 'theme-education', cat: 'education' },
    'contact.html': { text: 'DIRECT CHANNELS', theme: 'theme-contact', cat: 'contact' }
  };

  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const match = themeMap[href];

    if (match) {
      link.addEventListener('mouseenter', () => {
        morphWatermark(match.text);
        document.body.classList.remove('theme-skills', 'theme-experience', 'theme-education', 'theme-contact');
        if (match.theme) document.body.classList.add(match.theme);
      });

      link.addEventListener('mouseleave', () => {
        morphWatermark(defaultWatermark);
        document.body.classList.remove('theme-skills', 'theme-experience', 'theme-education', 'theme-contact');
        if (activeThemeClass) document.body.classList.add(activeThemeClass);
      });

      link.addEventListener('click', () => {
        triggerOverdrive(match.cat, link);
      });
    }
  });


  // ═════════════════════════════════════════════════════════════════
  // 7. FRONTEND KINETIC CLICK SHOCKWAVES & OVERDRIVE HOOK
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

      // Contextual overdrive mapping
      let cat = currentSectionMode;
      const text = el.textContent.trim();

      if (el.classList.contains('pill') || el.closest('.card-grid') || pagePath.includes('skills')) {
        cat = 'skills';
        pushTelemetryLog(`<strong>[STACK-NODE]</strong> Verified capability: <code>${text}</code>`, false);
      } else if (el.classList.contains('contact-box') || el.classList.contains('contact-chip') || pagePath.includes('contact')) {
        cat = 'contact';
        pushTelemetryLog(`<strong>[HANDSHAKE]</strong> External communication bridge active`, true);
      } else if (el.classList.contains('timeline-card') || pagePath.includes('experience')) {
        cat = 'experience';
        pushTelemetryLog(`<strong>[OPERATIONS]</strong> Queried commercial track record`, false);
      } else if (el.classList.contains('cert-card') || el.closest('.cert-section')) {
        cat = 'certs';
        pushTelemetryLog(`<strong>[CREDENTIAL]</strong> Verified credential inspected`, true);
      } else if (el.classList.contains('edu-card') || pagePath.includes('education')) {
        cat = 'education';
        pushTelemetryLog(`<strong>[ACADEMIC]</strong> Qarshi University BSCS verification valid`, false);
      } else if (el.classList.contains('hero-photo-ring')) {
        cat = 'about';
        pushTelemetryLog(`<strong>[IDENTITY]</strong> Abdul Rafay :: CS Candidate :: Lahore, PK`, true);
      }

      // Trigger 10-second overdrive on click!
      triggerOverdrive(cat, el);
    });
  });


  // ═════════════════════════════════════════════════════════════════
  // 8. 3D CARD MOUSE PERSPECTIVE TILT & SPOTLIGHT ILLUMINATION
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
  // 9. INTERACTIVE SKILL FILTERS (ON SKILLS.HTML)
  // ═════════════════════════════════════════════════════════════════
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.content-card[data-category]');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-filter');

        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        skillCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (cat === 'all' || cardCat === cat) {
            card.classList.remove('is-hidden');
            card.classList.remove('is-filtered');
            void card.offsetWidth;
            card.classList.add('is-filtered');
          } else {
            card.classList.add('is-hidden');
          }
        });

        // Trigger 10-second overdrive corresponding to filter category
        let odCat = 'skills';
        if (cat === 'cs') odCat = 'skills';
        else if (cat === 'web') odCat = 'experience';
        else if (cat === 'growth') odCat = 'education';

        triggerOverdrive(odCat, btn);
      });
    });
  }


  // ═════════════════════════════════════════════════════════════════
  // 10. ELASTIC CERTIFICATE LIGHTBOX MODAL
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

    triggerOverdrive('certs');
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
  // 11. INITIAL WELCOME TELEMETRY
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
