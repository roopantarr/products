const slides = document.querySelectorAll('.slide');
let index = 0;

function updateSlides(){
  slides.forEach((slide, i)=>{
    slide.classList.remove('active','left','right');

    if(i === index){
      slide.classList.add('active');
    } 
    else if(i === (index - 1 + slides.length) % slides.length){
      slide.classList.add('left');
    }
    else if(i === (index + 1) % slides.length){
      slide.classList.add('right');
    }
  });
}

updateSlides();

document.querySelector('.next').onclick = ()=>{
  index = (index + 1) % slides.length;
  updateSlides();
};

document.querySelector('.prev').onclick = ()=>{
  index = (index - 1 + slides.length) % slides.length;
  updateSlides();
};


/* swipe */
let startX = 0;
const slider = document.querySelector('.slider');

slider.addEventListener('touchstart', e=>{
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e=>{
  let endX = e.changedTouches[0].clientX;
  if(startX - endX > 50) index = (index + 1) % slides
});