$(document).ready(function () {
    // show spinner on page load
    $(window).on("load", function () {
      $(".loader-container").fadeOut(500);
    });
  
    // smooth scroll to div
    $('a[href^="#"]').on("click", function (event) {
      event.preventDefault();
  
      var hash = this.hash;
  
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    });
  
    // toggle navigation links visibility on scroll
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > $("#header").outerHeight()) {
        $("#navbar").addClass("navbar-scrolled");
      } else {
        $("#navbar").removeClass("navbar-scrolled");
      }
    });
  
    // parallax effect on hero section
    $(window).on("scroll", function () {
      var scrolled = $(this).scrollTop();
      $(".hero").css("background-position-y", -(scrolled * 0.2) + "px");
    });
  
    // AJAX form submission
    $("#contact-form").submit(function (event) {
      event.preventDefault();
  
      var formData = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "send-message.php",
        data: formData,
        success: function (response) {
          $(".message-box").text(response).fadeIn(500);
          $("#contact-form")[0].reset();
        },
        error: function () {
          alert("An error occurred while submitting the form.");
        },
      });
    });
  });
  