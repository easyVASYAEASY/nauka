window.addEventListener('scroll', function () { var nav = document.querySelector('nav');
 var scrollPosition = window.scrollY;
 if (scrollPosition > 100) { nav.style.backgroundColor = '#000';

  } else { nav.style.backgroundColor = '#333'; } });