


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






/* A COMMUNITY-SERVING NIL COLLECTIVE Boxes fade Right animation observer */

let boxes = document.querySelectorAll(".fade-right");

const boxSectionOptions = {
  threshold: .35,
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




/*** A COMMUNITY-SERVING NIL COLLECTIVE Boxes fade Right animation observe ***/


let fadeInElements = document.querySelectorAll(".fade-in");

const fadeInSectionOptions = {
  threshold: .35,
};


const fadeInSectionObserver = new IntersectionObserver(function(entries, fadeInSectionObserver) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-animation");
      fadeInSectionObserver.unobserve(entry.target);
    }

  });
}, fadeInSectionOptions);

fadeInElements.forEach(fadeInElement => {
  fadeInSectionObserver.observe(fadeInElement);
});
