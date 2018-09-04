// 自动轮播 优化代码
var allButtons = $('#buttons > span')

for (i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index() 
        var p = index * -1000  
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        activeButton(allButtons.eq(n))
    })
}

var n = 0;
var size = allButtons.length
playSlide(n % size)


var timeId = setTimer()


$('.window').on('mouseenter', function () {
    window.clearInterval(timeId)
})
$('.window').on('mouseleave', function () {
    timeId = setTimer()
})

function playSlide(index) {
    allButtons.eq(index).trigger('click')
}

function activeButton($button) {
    $button
        .addClass('red')
        .siblings('.red').removeClass('red')
}

function setTimer() {
    return setInterval(() => {
        n += 1
        playSlide(n % size)
    }, 2000)
}