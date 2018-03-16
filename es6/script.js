
(function(){
    let navBtns = $('#nav i')
    let navBtnli = $('#nav li')
    let numLi = 1
    let classNames =  'ans2_btn' + numLi
    let navI = null
    let time = null

    navBtnli.on('mouseover',function(){
        navI = $(this).children('i')
        run()
    })
    navBtnli.on('mouseout',function(){
        clearTimeout(time)
        // navI.removeClass()
        navI.css('display','none')
    })

    function run(){
        if(numLi > 25){
            numLi = 1
        }
        navI.css('display','block')        
        navI.removeClass()
        navI.addClass('ans2_btn' + numLi)
        numLi++
        time = setTimeout(run, 30)
    }

})()