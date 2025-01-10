'use strict';

$(document).ready(function () {
    let scrollbarWidth;

    function getScrollbarWidth() {
        const outer = document.createElement('div');
        Object.assign(outer.style, {
            visibility: 'hidden',
            overflow: 'scroll',
            msOverflowStyle: 'scrollbar',
        });
        document.body.appendChild(outer);

        const inner = document.createElement('div');
        outer.appendChild(inner);

        const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

        outer.parentNode.removeChild(outer);

        return scrollbarWidth;
    }

    $('.open-request').click(function () {
        scrollbarWidth = getScrollbarWidth();
        $('body')
            .css('margin-right', scrollbarWidth + 'px')
            .addClass('no-scroll');
        $('#popup-overlay').show();
        $('#popup-request').show();
    });

    $('#close-popup, #popup-overlay').click(function () {
        $('body').css('margin-right', '').removeClass('no-scroll');
        $('#popup-overlay').hide();
        $('#popup-request').hide();
    });
});
