'use  strict';

$(document).ready(function () {
    $('#privacy-policy-button').click(function () {
        $('#popup-overlay').show();
        $('#popup').show();
        $('body').addClass('no-scroll');
    });

    $('#close-popup, #popup-overlay').click(function () {
        $('#popup-overlay').hide();
        $('#popup').hide();
        $('body').removeClass('no-scroll');
    });
});
