$(function(){

	$('.accordion__item-images').on('click', function(){
		$(this).next('.accordion__item-text').slideToggle()
	});

	const boxes = Array.from(document.querySelectorAll('.accordion__item-images'));

	boxes.forEach((box) => {
	box.addEventListener('click', boxHandler);
});

function boxHandler(e) {
	e.preventDefault();
	let currentAccordionItemImages = e.target.closest('.accordion__item-images');
	let currentAccordionItemText = e.target.nextElementSibling;
	currentAccordionItemImages.classList.toggle('accordion__item-images--active');
}
});
