<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kingdom of Samawah - Government</title>
    <style>
        /* Styles as before */
    </style>
</head>
<body>

    <header class="header">
        <!-- Header content as before -->
    </header>

    <!-- Main Banner with Slideshow -->
    <div class="main-banner">
        <div class="overlay"></div>
        <div class="slideshow-container">
            <div class="mySlides fade">
                <img src="banner-image1.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
                <img src="banner-image2.jpg" style="width:100%">
            </div>
            <div class="mySlides fade">
                <img src="banner-image3.jpg" style="width:100%">
            </div>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>
        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
        <div class="content">
            <h1>Welcome to the Ministry of Interior of the Kingdom of Samawah</h1>
            <div class="cta-buttons">
                <a href="#">Learn More</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    </div>

    <!-- JavaScript for Slideshow -->
    <script>
        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {slideIndex = 1}
            if (n < 1) {slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";
            dots[slideIndex-1].className += " active";
        }
    </script>

</body>
</html>
document.addEventListener("DOMContentLoaded", function() {
    var feedbackButton = document.getElementById("feedbackButton");
    var feedbackFormContainer = document.getElementById("feedbackFormContainer");
    var closeFeedbackForm = document.getElementById("closeFeedbackForm");

    feedbackButton.addEventListener("click", function() {
        feedbackFormContainer.style.display = "flex";
    });

    closeFeedbackForm.addEventListener("click", function() {
        feedbackFormContainer.style.display = "none";
    });

    // Optional: Handle form submission
    var feedbackForm = document.getElementById("feedbackForm");
    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Feedback submitted!");
        feedbackFormContainer.style.display = "none";
        feedbackForm.reset();
    });
});
