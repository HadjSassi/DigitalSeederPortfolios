import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

/*

(function ($) {
  "use strict";

  // Navbar on scrolling
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.navbar').fadeIn('slow').css('display', 'flex');
    } else {
      $('.navbar').fadeOut('slow').css('display', 'none');
    }
  });


  // Smooth scrolling on the navbar links
  $(".navbar-nav a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 45
      }, 1500, 'easeInOutExpo');

      if ($(this).parents('.navbar-nav').length) {
        $('.navbar-nav .active').removeClass('active');
        $(this).closest('a').addClass('active');
      }
    }
  });


  // Typed Initiate
  if ($('.typed-text-output').length == 1) {
    var typed_strings = $('.typed-text').text();
    var typed = new Typed('.typed-text-output', {
      strings: typed_strings.split(', '),
      typeSpeed: 100,
      backSpeed: 20,
      smartBackspace: false,
      loop: true
    });
  }


  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $('.btn-play').click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $('#videoModal').on('shown.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#videoModal').on('hide.bs.modal', function (e) {
      $("#video").attr('src', $videoSrc);
    })
  });


  // Scroll to Bottom
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-to-bottom').fadeOut('slow');
    } else {
      $('.scroll-to-bottom').fadeIn('slow');
    }
  });


  // Skills
  $('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {offset: '80%'});


  // Portfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });
  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({filter: $(this).data('filter')});
  });


  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
  });


  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1
  });

})(jQuery);

function sendEmail(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Construct the mailto link
  const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  // Open the mail client
  window.location.href = mailtoLink;
}

document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");

  const startAnimation = (skill) => {
    const skillElement = skill.querySelector(".skill-percentage");
    const progressBar = skill.querySelector(".progress-bar");
    const target = parseInt(skillElement.dataset.target, 10);
    let current = 0;

    const updatePercentage = setInterval(() => {
      if (current >= target) {
        clearInterval(updatePercentage);
        return;
      }
      current++;
      skillElement.textContent = `${current}%`;
      progressBar.style.width = `${current}%`;
    }, 10); // Adjust the speed by changing the interval (in milliseconds)
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation(entry.target);
          observer.unobserve(entry.target); // Stop observing once animation starts
        }
      });
    },
    {threshold: 0.5} // Adjust this value for when the animation should trigger
  );

  skills.forEach((skill) => observer.observe(skill));
});

$(document).ready(function () {
  // Get all carousel items
  const $carouselItems = $('.carousel-item');
  let currentIndex = 0; // Start with the first item being the "current" one

  // Modal for Image Preview
  $('.carousel-item img').click(function () {
    var imageSrc = $(this).attr('src');
    $('#modalMediaContainer').html('<img src="' + imageSrc + '" class="img-fluid">');
    $('#mediaModal').modal('show');
  });

  // Initialize all carousels
  $(".carousel").each(function () {
    var $carousel = $(this);

    // Prevent the carousel from automatically sliding
    $carousel.carousel({
      interval: false,  // Disable automatic sliding
      touch: true       // Allow swiping on mobile devices
    });

    // Add event listeners for the next and previous controls (manual swipe)
    $carousel.find('.carousel-control-prev').click(function () {
      $carousel.carousel('prev');  // Manually go to the previous item
    });

    $carousel.find('.carousel-control-next').click(function () {
      $carousel.carousel('next');  // Manually go to the next item
    });

    // Dynamically create carousel indicators
    var $carouselItems = $carousel.find('.carousel-item');
    var $carouselIndicators = $carousel.find('.carousel-indicators');

    $carouselItems.each(function (index) {
      var indicator = $("<li>").attr({
        "data-target": "#" + $carousel.attr("id"),
        "data-slide-to": index
      });
      if (index === 0) {
        indicator.addClass("active");
      }
      $carouselIndicators.append(indicator);
    });
  });
});


$(document).ready(function() {
  // Initialize all carousels
  $(".carousel").each(function() {
    var $carousel = $(this);
    var $carouselItems = $carousel.find(".carousel-item");
    var $carouselIndicators = $carousel.find(".carousel-indicators");

    // Create indicators dynamically based on the number of items
    $carouselItems.each(function(index) {
      var indicator = $("<li>").attr({
        "data-target": "#" + $carousel.attr("id"),
        "data-slide-to": index
      });
      if (index === 0) {
        indicator.addClass("active");
      }
      $carouselIndicators.append(indicator);
    });

    // Automatically transition every 3 seconds
    setInterval(function() {
      $carousel.carousel("next");
    }, 3000);
  });
});
*/
