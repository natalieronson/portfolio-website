$(document).ready(function () {
   AOS.init();
    $(document).on('click', 'a[href^="#"]', function (event) {
        // event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    $(".dropdown").on("click", function() {
        console.log("i'm clicked!")
        // $(".header .wrapper ul li a").toggleClass("displayMenu");
        // $(".header .wrapper ul").toggleClass("animateMenu");
        $("nav ul li a").toggleClass("displayMenu");
        $("nav ul li").toggleClass("hideLink");
        $(".dropdown").toggleClass("hideLink");
        $("nav ul").toggleClass("animateMenu");
        $("nav ul").toggleClass("backgroundOpacity");
    })
});