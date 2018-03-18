'use strict';

(function () {
    var navBtns = $('#nav-ul i');
    var navBtnli = $('#nav-ul li');
    var numLi = 1;
    var navI = null;
    var time = null;
    var nametop = null;

    var navhs = $('#nav li');
    var navhem = $('#nav em');
    var numh = 1;
    var navh = null;
    var timeh = null;
    var nameh = null;

    navBtnli.on('mouseover', function () {
        navI = $(this).children('i');
        nametop = 'ans2_btn';
        run('ans2_btn');
    });
    navBtnli.on('mouseout', function () {
        clearTimeout(time);
        navI.css('display', 'none');
    });

    navhs.on('mouseover', function () {
        $(this).removeClass('ligb');
        navh = $(this).children('em');
        nameh = 'ans_btn';
        runh();
    });

    navhs.on('mouseout', function () {
        clearTimeout(timeh);
        navh.css('display', 'none');
        $(this).children('em').removeClass();
        $(this).addClass('ligb');
    });

    function run() {
        if (numLi > 25) {
            numLi = 1;
        }
        navI.css('display', 'block');
        navI.removeClass();
        navI.addClass(nametop + numLi);
        numLi++;
        time = setTimeout(run, 30);
    }

    function runh() {
        if (numh > 25) {
            numh = 1;
        }
        navh.css('display', 'block');
        navh.removeClass();
        navh.addClass(nameh + numh);
        numh++;
        timeh = setTimeout(runh, 30);
    }
})();
//# sourceMappingURL=script.js.map
