$(document).ready( () => {

	let width = $('.divslider').width(),
		itemsCount = $('.divslider__viewport').children().length,
		currentItem = 1;

	let setViewportWidth = () => {
		width = $('.divslider').width();
		let viewportWidth = (itemsCount) * width;
		let currentTransform = -((currentItem - 1) * width);
		$('.divslider__viewport').css('transition', 'all 0s ease 0s');
		$('.divslider__viewport').css('transform', `translateX(${currentTransform}px)`);
		$('.divslider__viewport').css('width', `${viewportWidth}px`);
		$('.divslider__item').css('width', width);
		$('.divslider__viewport').css('visibility', 'visible');
		$('.divslider__viewport').css('transition', 'transform 1s ease 0s');
	}

	let slideToTheNext = () => {
		if(currentItem < itemsCount) {
			let currentTransform = -(currentItem * width);
			$('.divslider__viewport').css('transform', `translateX(${currentTransform}px)`);
			currentItem++;
		}
	}

	let slideToThePrev = () => {
		if(currentItem > 1) {
			let currentTransform = -((currentItem - 2)* width);
			$('.divslider__viewport').css('transform', `translateX(${currentTransform}px)`);
			currentItem--;
		}
	}

	setViewportWidth();
	$(window).resize(setViewportWidth);

	$('#next').click( () => {
		slideToTheNext();
	})

	$('#prev').click( () => {
		slideToThePrev();
	})
})