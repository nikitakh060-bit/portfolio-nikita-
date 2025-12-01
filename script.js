//  MOBILE MENU TOGGLE 
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('open'); // Show/hide menu
  const isOpen = navLinks.classList.contains('open');
  menuButton.textContent = isOpen ? '✕' : '☰'; // Toggle icon
});

// Close menu when a link is clicked (mobile UX)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      menuButton.textContent = '☰';
    }
  });
});

//  SCROLL PROGRESS BAR 
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('scroll-bar').style.width = scrollPercent + '%';
});

//  CONTACT FORM VALIDATION 
const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Stop form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!name || !email) {
    messageDiv.textContent = 'Please fill out all required fields.';
    messageDiv.style.color = 'red';
  } else {
    messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
    messageDiv.style.color = 'green';
    contactForm.reset();
  }
});


