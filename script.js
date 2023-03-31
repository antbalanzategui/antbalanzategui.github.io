// Add active class to navbar links on click
const navbarLinks = document.querySelectorAll('nav ul li a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
    });
});

/* JavaScript for toggling theme */
const themeToggle = document.querySelector('#theme-toggle');
const body = document.body;

// Check if user has previously set a theme preference
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const hasStoredPreference = localStorage.getItem('theme') !== null;

// If user has not set a preference, use their system preference
if (!hasStoredPreference) {
  body.classList.toggle('dark-mode', userPrefersDark);
  themeToggle.checked = userPrefersDark;
}

// If user has set a preference, use their stored preference
if (hasStoredPreference) {
  body.classList.toggle('dark-mode', localStorage.getItem('theme') === 'dark');
  themeToggle.checked = localStorage.getItem('theme') === 'dark';
}

// Add event listener to toggle theme

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    if (window.location.href.includes("projects.html")) {
    document.getElementById('pImage1').src = './utils/darkMode/darkModeTOH.png';
    document.getElementById('pImage2').src = './utils/darkMode/darkModep4.png';
    document.getElementById('pImage3').src = './utils/darkMode/darkModeSMV - Copy.png'
    document.getElementById('pImage4').src = './utils/darkMode/darkModePS.png';
    document.getElementById('pImage5').src = './utils/darkMode/reactBoxSelect.png';
    document.getElementById('pImage6').src = './utils/darkMode/d3js.png';
    }

  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('theme', 'light');
    if (window.location.href.includes("projects.html")) {
    document.getElementById('pImage1').src = './utils/lightMode/towerofhanoi.png';
    document.getElementById('pImage2').src = './utils/lightMode/project4.png';
    document.getElementById('pImage3').src = './utils/lightMode/socialMediaVisual.png';
    document.getElementById('pImage4').src = './utils/lightMode/passwordSecurity.png';
    document.getElementById('pImage5').src = './utils/lightMode/reactBoxLightMode.png';
    document.getElementById('pImage6').src = './utils/lightMode/lightModeD3JS.png';
    }
  }
});

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = true;
    if (window.location.href.includes("projects.html")) { 
    document.getElementById('pImage1').src = './utils/darkMode/darkModeTOH.png';
    document.getElementById('pImage2').src = './utils/darkMode/darkModep4.png';
    document.getElementById('pImage3').src = './utils/darkMode/darkModeSMV - Copy.png'
    document.getElementById('pImage4').src = './utils/darkMode/darkModePS.png';
    document.getElementById('pImage5').src = './utils/darkMode/reactBoxSelect.png';
    document.getElementById('pImage6').src = './utils/darkMode/d3js.png';
    }

  } else {
    body.classList.remove('dark-mode');
    themeToggle.checked = false;
    if (window.location.href.includes("projects.html")) {
    document.getElementById('pImage1').src = './utils/lightMode/towerofhanoi.png';
    document.getElementById('pImage2').src = './utils/lightMode/project4.png';
    document.getElementById('pImage3').src = './utils/lightMode/socialMediaVisual.png';
    document.getElementById('pImage4').src = './utils/lightMode/passwordSecurity.png';
    document.getElementById('pImage6').src = './utils/lightMode/lightModeD3JS.png';
    }
  }



