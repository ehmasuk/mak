


// partical plugin
var typed = new Typed('.typehere', {
    strings: ["Mashuk.", "A Web Designer.",'A Web Developer','A Graphic Designer','A Photographar'],
    typeSpeed: 100,
    startDelay: 100,
    backSpeed: 50,
    backDelay: 2000,
    smartBackspace: false,
    loop: true,
});
// partical plugin ends


// animation on scroll plugin
AOS.init();
// animation on scroll plugin ends



// counter js
$(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });
});
// counter js ends



// waypoints js
$(document).ready(function(){
$("#about-section").waypoint(function(direction){
        if (direction == "down"){
            $("header").addClass("fixedstickynav");
        } else {
            $("header").removeClass("fixedstickynav");
        }
    });
});
// waypoints js ends




// preoader scrips
$(document).ready(function(){
    $(window).on("load", function(){
        $(".preloader-section").fadeOut()
    });
});
// preoader scrips ends


