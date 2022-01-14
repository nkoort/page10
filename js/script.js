// $(document).ready(function() {
// 	$('.header__burger').click(function(event) {
// 		$('.header__burger, .header__link').toggleClass('active');
// 	});
// });



// $(document).ready(function() {
// 	$('.body__block1-item').click(function(event) {
// 		$('.body__block1-item, .body__block1-item-price')
// 		$('.body__block1-item, .body__block1-item-price').toggleClass('active');
// 	});
// });

$(document).ready(function () {
	$(".body__block1-item").click(function () {
		$(".body__block1-item").removeClass('active');
		$(".body__block1-item-price").removeClass('active');
		$(this).toggleClass('active');
		// $('.body__block1-item-price').toggleClass('active');
	});
});