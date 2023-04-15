
  /*

let sectionOne = document.querySelector(".community-animation-observer");
let slideUpInAnimation = document.querySelector(".community-section__title");



  const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
  };
  
  const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        slideUpInAnimation.classList.add("slide-up-in");
      } else {
        slideUpInAnimation.classList.remove("slide-up-in");
      }
    });
  },
  sectionOneOptions);
  
  sectionOneObserver.observe(sectionOne);

  */

/* A COMMUNITY-SERVING NIL COLLECTIVE title animation observer */

/*Observer*/
let sectionOne = document.querySelector(".community-animation-observer");

/* Element your adding class to - can be the same */
let slideUpInAnimation = document.querySelector(".community-section__main-container .community-section__title");

const sectionOneOptions = {
  rootMargin: "-250px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (entry.isIntersecting) { // Check if the element is intersecting
      slideUpInAnimation.classList.add("slide-up-in");
      sectionOneObserver.unobserve(entry.target); // Unobserve the target element to prevent animation from repeating
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);






/* A COMMUNITY-SERVING NIL COLLECTIVE Boxes fade Right animation observer 


let boxes = document.querySelectorAll(".fade-right");

const boxSectionOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};


const boxesSectionObserver = new IntersectionObserver(function(
  entries,
  boxesSectionObserver
) {
  entries.forEach(entry => {
   
    if (entry.isIntersecting) { // Check if the element is intersecting
      entry.target.classList.add("scroll-right-animation");
      boxesSectionObserver.unobserve(entry.target); // Unobserve the target element to prevent animation from repeating
    }
    
  });
}, boxSectionOptions );




boxes.forEach(box => {
  boxesSectionObserver.observe(box);
});

*/


let boxes = document.querySelectorAll(".fade-right");

const boxSectionOptions = {
  threshold: 0,
};


const boxesSectionObserver = new IntersectionObserver(function(entries, boxesSectionObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll-right-animation");
      boxesSectionObserver.unobserve(entry.target);
    }

  });
}, boxSectionOptions);

boxes.forEach(box => {
  boxesSectionObserver.observe(box);
});
