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
  var makeItRain = function() {
    // clear out everything inside the rainHolder div
    $('.rainHolder .rain').empty();
  
    // rest of the function remains the same
    var increment = 0;
    var drops = "";
    var backDrops = "";
  
    while (increment < 100) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
      //random number between 5 and 2
      var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
      backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }
  
    $('.rainHolder .rain.front-row').append(drops);
    $('.rainHolder .rain.back-row').append(backDrops);
  }
  
  if (window.location.href.includes("rain.html")) {
    $('body').addClass('splat-toggle');
    $('body').addClass('back-row-toggle');
    makeItRain();
  }



