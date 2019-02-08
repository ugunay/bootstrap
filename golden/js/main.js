$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        $(".fixed-top").addClass("change-fixed-top");
    } else {
        $(".fixed-top").removeClass("change-fixed-top");
    }
});

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});﻿