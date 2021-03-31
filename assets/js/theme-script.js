$(document).ready(function () {
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$('header .navigation > ul').prepend('<li><a href="javascript:void(0)" class="d-flex d-lg-none" id="close-menu"><i class="fas fa-times"></i></a></li>');
		$("header .navigation > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse list-unstyled mb-0",
				"data-parent": "#hasMenu"
			});
		})
	}
	
	function callMenu() {
		if ($('body').hasClass('show-navigation')) {
			$('body').removeClass('show-navigation');
		} else {
			$('body').addClass('show-navigation');
		}
	}
	
	$(document).on("click", "#hamburger, #close-menu, .header-overlay", function () {
		callMenu();
	});
	
	
	function loadBaiViet(id_article) {
		// Xử lý lấy ra các trường dữ liệu cần thiết của bài viết
		let link_article = 'javascript:void(0)',
			image_article = './assets/images/bai-viet/1.jpg',
			title_article = 'Cập nhật 6 điểm nóng nhất về bất động sản cả nước',
			desc_article = '2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus distinctio esse eum iste laudantium molestiae nesciunt omnis optio voluptatum? Rem.',
			date_article = '29-03-2021',
			view_article = '1994';
		
		$('.card-article_big .placeholder-loading').addClass('d-block');
		setTimeout(function (e) {
			$('.card-article_big > .link-cover').attr('href', link_article);
			$('.card-article_big > .card-header > img').attr('src', image_article);
			$('.card-article_big > .card-body > .card-title > h5').text(title_article);
			$('.card-article_big > .card-body > .card-desc > p').text(desc_article);
			$('.card-article_big > .card-body > .card-meta > ul > .card-date > span').text(date_article);
			$('.card-article_big > .card-body > .card-meta > ul > .card-view > span').text(view_article);
			$('.card-article_big .placeholder-loading').removeClass('d-block');
		}, 3000);
	}
	
	$('.card-article_small > .link-cover').hover(function () {
		loadBaiViet($(this).data('id'));
	});
	
	$('#load-more').click(function () {
		$(this).closest('.row').prev('.template-3_product').find('.d-none[class*=col]').removeClass('d-none');
		$(this).addClass('d-none');
		$(this).next('a').removeClass('d-none');
	});
	
	if ($('#swiper-banner').length > 0) {
		const banner = new Swiper('#swiper-banner', {
			loop: true,
			slidesPerView: 1,
			speed: 250,
			effect: 'fade',
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
		})
	}
	
	if ($('#swiper-tags').length > 0) {
		const tags = new Swiper('#swiper-tags', {
			slidesPerView: 6,
			spaceBetween: 10,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			breakpoints: {
				320: {
					slidesPerView: 3,
				},
				768: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 6,
				},
			}
		})
	}
	
	if ($('#swiper-feature').length > 0) {
		const feature = new Swiper('#swiper-feature', {
			slidesPerView: 4,
			spaceBetween: 15,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 4,
				},
			}
		})
	}
	
	if ($('#swiper-article').length > 0) {
		const article = new Swiper('#swiper-article', {
			slidesPerView: 3,
			spaceBetween: 30,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			}
		})
	}
	
	if ($('#swiper-article-2').length > 0) {
		const article_2 = new Swiper('#swiper-article-2', {
			slidesPerView: 4,
			spaceBetween: 15,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				600: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 4,
				},
			}
		})
	}
	
	if ($('#swiper-partner').length > 0) {
		const tags = new Swiper('#swiper-partner', {
			slidesPerView: 6,
			spaceBetween: 10,
			autoplay: {
				delay: 10000,
				disableOnInteraction: false,
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 4,
				},
				1024: {
					slidesPerView: 6,
				},
			}
		})
	}
	
	if ($('.template-3_select2').length > 0) {
		$('.template-3_select2').select2();
	}
	
	$("#price-slider-range").slider({
		range: !0,
		orientation: "horizontal",
		min: 0,
		max: 2e4,
		values: [0, 2e4],
		step: 100,
		slide: function (n, t) {
			if (t.values[0] === t.values[1]) return !1;
			$("#txtPriceMinValue").val(t.values[0]);
			$("#txtPriceMaxValue").val(t.values[1]);
			$("#txtPriceMinValue").trigger("keyup");
			$("#txtPriceMaxValue").trigger("keyup");
		},
	});
	
	$("#area-slider-range").slider({
		range: !0,
		orientation: "horizontal",
		min: 0,
		max: 500,
		values: [0, 500],
		step: 10,
		slide: function (n, t) {
			if (t.values[0] === t.values[1]) return !1;
			$("#txtAreaMinValue").val(t.values[0]);
			$("#txtAreaMaxValue").val(t.values[1]);
			$("#txtAreaMinValue").trigger("keyup");
			$("#txtAreaMaxValue").trigger("keyup");
		},
	});
});