'use strict';

(function () {
    var navBtns = $('#nav i');
    var navBtnli = $('#nav li');
    var numLi = 1;
    var classNames = 'ans2_btn' + numLi;
    var navI = null;
    var time = null;

    navBtnli.on('mouseover', function () {
        navI = $(this).children('i');
        run();
    });
    navBtnli.on('mouseout', function () {
        clearTimeout(time);
        // navI.removeClass()
        navI.css('display', 'none');
    });

    function run() {
        if (numLi > 25) {
            numLi = 1;
        }
        navI.css('display', 'block');
        navI.removeClass();
        navI.addClass('ans2_btn' + numLi);
        numLi++;
        time = setTimeout(run, 30);
    }
})();
//# sourceMappingURL=script.js.map
