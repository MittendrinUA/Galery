
const homeSwiperBig = new Swiper('.home__slider-big', {
	navigation: {
		nextEl: '.home__next',
		prevEl: '.home__prev'
	},
	loop: true,
	loopedSlides: 4,
	effect: 'fade',
	
})

const homeSwiperSmall = new Swiper('.home__slider-small', {
	breakpoints: {
		1600: {
			loop: true,
			spaceBetween: 6,
			slidesPerView: 4,
			loopedSlides: 4
		}
	}
})

homeSwiperBig.controller.control = homeSwiperSmall;
homeSwiperSmall.controller.control = homeSwiperBig;