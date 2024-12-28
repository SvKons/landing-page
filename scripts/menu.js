'use strict';

$(document).ready(function () {
    const $menuToggle = $('#menu-toggle');
    const $menu = $('#menu');
    const $menuCloseIcon = $('.menu-close');
    const $menuOpenIcon = $('.menu-toggle');

    $menuToggle.click(function () {
        $menu.toggleClass('hidden flex');
        $menuCloseIcon.toggleClass('hidden');
        $menuOpenIcon.toggleClass('hidden');
    });

    const handleResize = function () {
        if ($(window).width() >= 769) {
            $menu.removeClass('hidden').addClass('flex');
            $menuCloseIcon.addClass('hidden');
            $menuOpenIcon.removeClass('hidden');
        } else {
            $menu.addClass('hidden').removeClass('flex');
        }
    };

    $(window).resize(handleResize);
    handleResize();
});
