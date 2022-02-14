const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

console.log(slideWidth);

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
   if(targetIndex === 0 ){
      prevButton.classList.add('is-hidden');
      nextButton.classList.remove('is-hidden');
   }else if(targetIndex === slides.length - 1){
      nextButton.classList.add('is-hidden');
      prevButton.classList.remove('is-hidden');
   }else{
      nextButton.classList.remove('is-hidden');
      prevButton.classList.remove('is-hidden');
   }
}

//slide positions
const setSlidePosition = (slide, index) => {
   slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
   track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
   currentSlide.classList.remove('current-slide');
   targetSlide.classList.add('current-slide');
}

//left button
prevButton.addEventListener('click', e => {
   const currentSlide = track.querySelector('.current-slide');
   const prevSlide = currentSlide.previousElementSibling;
   const currentDot  = dotsNav.querySelector('.current-dot');
   const prevDot = currentDot.previousElementSibling;
   const prevIndex = slides.findIndex(slide => slide === prevSlide);

   moveToSlide(track, currentSlide, prevSlide);
   updateDots(currentDot, prevDot);

   hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

//right button
nextButton.addEventListener('click', e => {
   const currentSlide = track.querySelector('.current-slide');
   const nextSlide = currentSlide.nextElementSibling;
   const currentDot  = dotsNav.querySelector('.current-dot');
   const nextDot = currentDot.nextElementSibling;
   const nextIndex = slides.findIndex(slide => slide === nextSlide);

   moveToSlide(track, currentSlide, nextSlide);
   updateDots(currentDot, nextDot)

   hideShowArrows(slides, prevButton, nextButton, nextIndex);
})


//nav dots

const updateDots = (currentDot, targetDot) => {
   currentDot.classList.remove('current-dot');
   targetDot.classList.add('current-dot')
}

dotsNav.addEventListener('click', e => {
   const targetDot  = e.target.closest('button');

   if(!targetDot) return;

   const currentSlide = track.querySelector('.current-slide');
   const currentDot = dotsNav.querySelector('.current-dot');
   const targetIndex = dots.findIndex(dot => dot === targetDot);
   const targetSlide = slides[targetIndex];

   moveToSlide(track, currentSlide, targetSlide);
   updateDots(currentDot, targetDot);

   hideShowArrows(slides, prevButton, nextButton, targetIndex);

})