
(function(){
    let navBtns = $('#nav-ul i')
    let navBtnli = $('#nav-ul li')
    let numLi = 1
    let navI = null
    let time = null
    let nametop = null

    let navhs = $('#nav li')
    let navhem = $('#nav em')
    let numh = 1
    let navh = null
    let timeh = null
    let nameh = null

    navBtnli.on('mouseover',function(){
        navI = $(this).children('i')
        nametop = 'ans2_btn' 
        run('ans2_btn')
    })
    navBtnli.on('mouseout',function(){
        clearTimeout(time)
        navI.css('display','none')
    })

    navhs.on('mouseover',function(){
        $(this).removeClass('ligb')
        navh =  $(this).children('em')
        nameh = 'ans_btn'
        runh()
    })

    navhs.on('mouseout',function(){
        clearTimeout(timeh)
        navh.css('display','none')        
        $(this).children('em').removeClass()        
        $(this).addClass('ligb')        
    })


    function run(){
        if(numLi > 25){
            numLi = 1
        }
        navI.css('display','block')        
        navI.removeClass()
        navI.addClass(nametop + numLi)
        numLi++
        time = setTimeout(run, 30)
    }

    function runh(){
        if(numh > 25){
            numh = 1
        }
        navh.css('display','block')        
        navh.removeClass()
        navh.addClass(nameh + numh)
        numh++
        timeh = setTimeout(runh, 30)
    }

})()