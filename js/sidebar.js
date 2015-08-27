$(function() {

	// Изначально скрываю все изображения и индексирую 
	$('#slider img').each(function(i) {
		$(this).attr('index', i).hide();

	});

	// Но одно оставляю как старотовая картинка
	var firstImg = $("#slider img:first");
	var lastImg = $("#slider img:last");
	firstImg.show();
	
	// Генерация ссылок
	$('#slider').append("<a href='#' id='arrowR' class='btn' name='arrowR'>>></a>");
	$('#slider').prepend("<a href='#' id='arrowL' class='btn' name='arrowR'><<</a>");

	// Функция для перехода к следующиему изображению
	function nextImg() {		
		$('#slider img:visible').attr('id', 'currentImg');
		$('#slider img:hidden').removeAttr('id');
		$('#currentImg').fadeOut(1000).next().fadeIn(1000);
		console.log($('#currentImg').attr('index'));
	}

	function prevImg() {
		$('#slider img:visible').hide().prev().show();
		$(this).hide();
	}
	
	// События мышы 
        $('#arrowR').click(function(e) {
		e.preventDefault();	
		nextImg();		
	});

	$('#arrowL').click(function(e) {
		e.preventDefault();
		prevImg();
		if ($('#slider img:visible').attr('src') === undefined) lastImg.show();
		console.log($('#slider img:visible').attr('src'));
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