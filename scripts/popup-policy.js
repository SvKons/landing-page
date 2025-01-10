'use strict';

$(document).ready(function () {
    $('.privacy-policy-button').click(function (event) {
        event.preventDefault();
        $('#popup-overlay').show();
        $('#popup-policy').show();
        $('body').addClass('no-scroll');
    });

    $('#close-popup, #popup-overlay').click(function () {
        $('#popup-overlay').hide();
        $('#popup-policy').hide();
        $('body').removeClass('no-scroll');
    });
});
