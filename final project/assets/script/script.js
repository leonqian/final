$(document).ready( function() {
$('.item-life').click(function() {
window.location.href= 'life.html'; });
$('.item').click(function() {
window.location.href= 'index.html'; });
$('.item-bio').click(function() {
window.location.href= 'bio.html'; });
$('.item-life').hover(function() {
		$(".item").fadeOut();
		$(".item-bio").fadeOut();
        $(this).css('cursor','pointer');
    });
$('.item').hover(function() {
		$(".item-bio").fadeOut();
		$(".item-life").fadeOut();
        $(this).css('cursor','pointer');
    });
$('.item-bio').hover(function() {
		$(".item-life").fadeOut();
		$(".item").fadeOut();
        $(this).css('cursor','pointer');
    });
 





});