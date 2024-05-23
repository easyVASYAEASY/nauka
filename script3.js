const slider = document.querySelector('.slider');
 const images = slider.querySelectorAll('img'); 
 let currentImageIndex = 0;
  images[currentImageIndex].classList.add('active'); 
  slider.addEventListener('click', function (e) { if (e.target.classList.contains('next')) 
    { images[currentImageIndex].classList.remove('active'); 
  currentImageIndex = (currentImageIndex + 1) % images.length; images[currentImageIndex].classList.add('active'); 
} else if (e.target.classList.contains('prev')) { images[currentImageIndex].classList.remove('active');
 currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; images[currentImageIndex].classList.add('active'); 
} }); 
const slider2 = document.querySelector('.slider2');
 const images2 = slider2.querySelectorAll('img'); 
 let currentImageIndex2 = 0; images2[currentImageIndex2].classList.add('active'); 
 slider2.addEventListener('click', function (e) { if (e.target.classList.contains('next')) 
    { images2[currentImageIndex2].classList.remove('active');
  currentImageIndex2 = (currentImageIndex2 + 1) % images2.length; 
  images2[currentImageIndex2].classList.add('active');
 } else if (e.target.classList.contains('prev')) { images2[currentImageIndex2].classList.remove('active');
  currentImageIndex2 = (currentImageIndex2 - 1 + images2.length) % images2.length; images2[currentImageIndex2].classList.add('active'); 
} }); 
const slider3 = document.querySelector('.slider3'); 
const images3 = slider3.querySelectorAll('img');
 let currentImageIndex3 = 0; images3[currentImageIndex3].classList.add('active');
  slider3.addEventListener('click', function (e) { if (e.target.classList.contains('next')) 
    { images3[currentImageIndex3].classList.remove('active'); currentImageIndex3 = (currentImageIndex3 + 1) % images3.length; 
  images3[currentImageIndex3].classList.add('active');
 } else if (e.target.classList.contains('prev')) 
    { images3[currentImageIndex3].classList.remove('active'); 
    currentImageIndex3 = (currentImageIndex3 - 1 + images3.length) % images3.length; 
    images3[currentImageIndex3].classList.add('active'); 
} });