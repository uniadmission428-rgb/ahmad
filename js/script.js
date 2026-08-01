document.addEventListener('DOMContentLoaded', function () {

  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

  const dots = document.querySelectorAll('.hero-dots span');
  const heroImg = document.querySelector('.hero-bg-img');
  const heroImages = [
    'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1583912267550-d6c2ac3196c0?auto=format&fit=crop&w=1400&q=80'
  ];
  let current = 0;
  function activateDot(index) {
    dots.forEach(d => d.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
    if (heroImg && heroImages[index]) heroImg.src = heroImages[index];
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => { current = i; activateDot(i); }));
  if (dots.length) {
    setInterval(() => {
      current = (current + 1) % dots.length;
      activateDot(current);
    }, 4500);
  }

  const filterButtons = document.querySelectorAll('.filter-tabs button');
  const productCards = document.querySelectorAll('.product-card');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', function () {
      filterButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const cat = this.getAttribute('data-filter');
      productCards.forEach(card => {
        card.style.display = (cat === 'all' || card.getAttribute('data-category') === cat) ? 'block' : 'none';
      });
    });
  });

  const contactForm = document.querySelector('.contact-form form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! Your quote request has been received. Our team will contact you within 24 hours.');
      contactForm.reset();
    });
  }

  const newsletterForm = document.querySelector('.newsletter-input');
  if (newsletterForm) {
    const btn = newsletterForm.querySelector('button');
    btn.addEventListener('click', function () {
      const input = newsletterForm.querySelector('input');
      if (input.value.trim() !== '') {
        alert('Subscribed successfully with: ' + input.value);
        input.value = '';
      } else {
        alert('Please enter a valid email address.');
      }
    });
  }

  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav ul > li').forEach(li => {
    const link = li.querySelector('a');
    if (link && link.getAttribute('href') === path) li.classList.add('active');
  });

});
