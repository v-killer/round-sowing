// 自动轮播
var allButtons = $('#buttons > span')

for (i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index() // 被点击的按钮是第几个
        var p = index * -1000  // 移动多少像素
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        })
        n = index
        allButtons.eq(n)
            .addClass('red')
            .siblings('.red').removeClass('red')
    })
}

var n = 0;
var size = allButtons.length
allButtons.eq(n % size).trigger('click')
    .addClass('red')
    .siblings('.red').removeClass('red')

var timeId = setInterval(() => {
    n += 1
    allButtons.eq(n % size).trigger('click')  // 当n=0/1/2/3 时, 触发一次click事件;  allButtons.eq(n%4)===$(allButton(n%4))
        .addClass('red')
        .siblings('.red').removeClass('red')
}, 2000)

$('.window').on('mouseenter', function () {
    window.clearInterval(timeId)
})
$('.window').on('mouseleave', function () {
    timeId = setInterval(() => {
        n += 1
        allButtons.eq(n % size).trigger('click')  // 当n=0/1/2/3 时, 触发一次click事件;  allButtons.eq(n%4)===$(allButton(n%4))
            .addClass('red')
            .siblings('.red').removeClass('red')
    }, 2000)
})