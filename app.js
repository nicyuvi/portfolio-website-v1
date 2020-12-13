//Fade in on scroll
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.25,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // fade in observed elements that are in view
      entry.target.classList.add('fadeIn');
    }
  });
}

const fadeElms = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(observerCallback, observerOptions);
fadeElms.forEach((el) => observer.observe(el));
//end fade in on scroll

//get scroll position
//Smart scroll nav bar
// detect scroll top or down
if ($('.smart-scroll').length > 0) {
  // check if element exists
  var last_scroll_top = 0;
  $(window).on('scroll', function () {
    scroll_top = $(this).scrollTop();
    if (scroll_top > 200) {
      if (scroll_top < last_scroll_top) {
        $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
      } else {
        $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
      }
      last_scroll_top = scroll_top;
    }
  });
}
// end Smart scroll nav bar
