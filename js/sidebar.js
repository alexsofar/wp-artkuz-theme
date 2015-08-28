$(function () {
    // Изначально скрываю все изображения и индексирую 
    var contextSlider = $('#slider');
    contextSlider.find('img').each(function (i) {
        $(this).attr('index', i).hide();
    });

    // Но одно оставляю как старотовая картинка
    var firstImg = contextSlider.find("img:first");
    var lastImg = contextSlider.find("img:last");
    firstImg.show();

    // Генерация ссылок
    contextSlider.append("<a href='#' id='arrowL' class='btn' name='arrowR'><<</a><a href='#' id='arrowR' class='btn' name='arrowR'>>></a>");

    // События мышы 
    $('#arrowR').click(function (e) {
        e.preventDefault();
        var indexImg = contextSlider.find('img:visible').fadeOut(2000).next().fadeIn(2000).attr('index');
        if (indexImg === undefined) firstImg.fadeIn(2000);
        console.log(indexImg);
    });

    $('#arrowL').click(function (e) {
        e.preventDefault();
        var indexImg = contextSlider.find('img:visible').fadeOut(1000).prev().fadeIn(1000).attr('index');
        if (indexImg === undefined) lastImg.fadeIn(1000);
    });

});// End






























/* АРХИВ

$('#arrowR').click(function(e) {
	e.preventDefault();
	nextImg();
	if ($('#slider img:visible').attr('src') == undefined) firstImg.fadeIn(1000);
	console.log($('#slider img:visible').attr('src'));

});

*/