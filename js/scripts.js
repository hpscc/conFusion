$(document).ready(function() {
    //Carousel
    // set sliding interval to 2000ms 
    $('#mycarousel').carousel({interval: 2000});
    // introduce JQuery code to make the carousel buttons (play/pause) work
    // activate play/pause button 
    $('#carouselButton').click(function() {
        // identifying the current state of the button in order to flip it 
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            // pause the carousel
            $('#mycarousel').carousel('pause');
            // now flip the button
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            // play the carousel
            $('#mycarousel').carousel('cycle');
            // now flip the button
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });

    // activating login modal
    $('#login-button').click(function() {
        $('#loginModal').modal('toggle');
    });
    
    // activating reservation modal
    $('#reserve-button').click(function() {
        $('#reservationModal').modal('toggle');
    });
})