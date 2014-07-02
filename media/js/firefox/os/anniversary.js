/* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/. */

;(function($) {
    'use strict';

    var pager = new Mozilla.Pager($('#main-content'));
    var $phone = $('#phone');
    var $close = $('#close');
    var $pageHeader = $('#page-header');

    // set up backgrounds
    var $wrapper = $('#wrapper');
    var $bgBlue = $('<div class="bg" id="bg-blue"></div>');
    $wrapper.prepend($bgBlue).prepend('<div class="bg" id="bg-white"></div>');

    $phone.on('click', 'a', function(e) {
        e.preventDefault();

        // disallow clicks if phone is offset
        if (!$phone.hasClass('offset')) {
            // show blue bg
            $bgBlue.addClass('active');

            $phone.addClass('offset');
            $close.addClass('active');
            $pageHeader.addClass('alt');

            // determine which section to display
            var page = pager.findPageById($(this).attr('href').replace(/#/, ''));

            pager.setPageWithAnimation(page);
        }
    });

    $('#close').on('click', function() {
        $phone.removeClass('offset');
        $close.removeClass('active');
        $pageHeader.removeClass('alt');

        // show intro section
        var page = pager.findPageById('intro');
        pager.setPageWithAnimation(page);

        // hide blue bg
        $bgBlue.removeClass('active');
    });
})(window.jQuery);
