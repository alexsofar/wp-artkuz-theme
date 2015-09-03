$(function () {
    // Изначально скрываю все изображения и индексирую 
    var contextSlider = $('#slider');
    contextSlider.find('img').each(function (i) {
        $(this).attr('index', i).hide();
    });
    
    $.fn.slider = function() {
        var option = {
            test: 'hello'
        };
        
        this.test(function() {
            return this.test;
        });
    };
    
    slider.test();
    
    // Но одно оставляю как старотовая картинка
    var firstImg = contextSlider.find("img:first");
    var lastImg = contextSlider.find("img:last");
    firstImg.show();
    $('img').hide;
    // Генерация ссылок
    contextSlider.append("<a href='#' id='ak-arrow-next' name='ak-arrow-next'><i id='ak-icon-chevron-right'></i></a><a href='#' id='ak-arrow-prev' name='ak-arrow-prev'><i id='ak-icon-chevron-left'></i></a>");

    // События мышы 
    $('#ak-arrow-next').click(function (e) {
        e.preventDefault();
        var indexImg = contextSlider.find('img:visible').fadeOut(550).next().fadeIn(550).attr('index');
        if (indexImg === undefined)
            firstImg.fadeIn(550);
    });

    $('#ak-arrow-prev').click(function (e) {
        e.preventDefault();
        var indexImg = contextSlider.find('img:visible').fadeOut(550).prev().fadeIn(550).attr('index');
        if (indexImg === undefined)
            lastImg.fadeIn(550);
    });
//    $('img').hide();

});// End