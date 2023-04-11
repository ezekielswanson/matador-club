
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

let sectionOne = document.querySelector(".community-animation-observer");
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



/* A COMMUNITY-SERVING NIL COLLECTIVE title animation observer */

  
