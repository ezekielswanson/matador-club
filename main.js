

/*
let slideUpInAnimation = document.querySelector(".slide-up-in-observer");

const communitySectionTitleOptions = {
    rootMargin: "-200px 0px 0px 0px"

  };
  
  const communitySectionTitleObserver = new IntersectionObserver(function(
    entries,
    communitySectionTitleObserver
  ) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        header.classList.add("slide-up-in");
      } else {
        header.classList.remove("slide-up-in");
      }
    });
  },
  communitySectionTitleOptions);
  
  communitySectionTitleObserver.observe(slideUpInAnimation);
  */

let sectionOne = document.querySelector(".slide-up-in-observer");
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
  
