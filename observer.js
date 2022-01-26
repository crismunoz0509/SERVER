const sectionTwo = document.querySelector('.led-showcase');
const sections = document.querySelectorAll('section');

const options = {
   root: null , // it is the viewport
   threshold: 0.25, 
   rootMargin: "-150px", 
}; 

const observer = 
   new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
         if(!entry.isIntersecting){
            return;
         }
         console.log(entry.target);
      });
}, options)


sections.forEach(section => {
   observer.observe(section);
})