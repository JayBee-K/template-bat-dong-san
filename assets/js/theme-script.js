$(document).ready(function () {
	function callMenu() {
		if ($('body').hasClass('show-navigation')) {
			$('body').removeClass('show-navigation');
		} else {
			$('body').addClass('show-navigation');
		}
	}
	
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
	
	function expandedList(elm) {
		if (elm.hasClass('active')) {
			elm.removeClass('active');
			elm.parent().prev('ul').find('li.expanded-list').addClass('d-none');
		} else {
			elm.addClass('active');
			elm.parent().prev('ul').find('li.expanded-list').removeClass('d-none');
		}
	}
	
	let windowWidth = $(window).width();
	if (windowWidth < 992) {
		$("header .header-navigation--inner > ul > li > ul").each(function (index) {
			$(this).prev().attr({
				"href": "#subMenu" + index,
				"data-toggle": "collapse"
			});
			$(this).attr({
				"id": "subMenu" + index,
				"class": "collapse list-unstyled mb-0",
				"data-parent": "#hasMenu"
			});
			
			if ($(this).find('ul').length > 0) {
				$(this).find('ul').each(function (index_child, elm_child) {
					$(elm_child).prev().attr({
						"href": "#subMenu_child" + index_child,
						"data-toggle": "collapse"
					});
					$(elm_child).attr({
						"id": "subMenu_child" + index_child,
						"class": "collapse list-unstyled mb-0",
						"data-parent": "#subMenu" + index
					});
				})
			}
		});
		
		
		$('header .header-navigation--inner > ul > li> a').click(function () {
			if ($(this).next('ul').hasClass('show')) {
				let _ul = $(this).next('ul');
				_ul.find('ul.show').removeClass('show');
			}
			
			if ($(this).closest('#hasMenu').find('ul ul.show').length) {
				let _ulNext = $(this).closest('#hasMenu').find('ul');
				_ulNext.find('ul.show').removeClass('show');
			}
		});
	}
	
	$(document).on("click", "#hamburger, #close-menu, .header-overlay", function () {
		callMenu();
	});
	
	function callSearch() {
		if ($('body').hasClass('show-search')) {
			$('body').removeClass('show-search');
		} else {
			$('body').addClass('show-search');
		}
	}
	
	$(document).on("click", "#callSearch, .close-search", function () {
		callSearch();
	});
	
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
	
	if ($('#swiper-project').length > 0) {
		const project = new Swiper('#swiper-project', {
			loop: true,
			slidesPerView: 1,
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
	
	if ($('#swiper-kcn').length > 0) {
		const project = new Swiper('#swiper-kcn', {
			loop: true,
			slidesPerView: 1,
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
	if ($('#swiper-images--project').length > 0) {
		const project = new Swiper('#swiper-images--project', {
			loop: true,
			slidesPerView: 1.3,
			spaceBetween: 20,
			direction: 'horizontal',
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			autoplay: {
				delay: 1000000,
				disableOnInteraction: false,
			},
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
	
	$('.list-video > li').click(function (e) {
		let _url = $(this).data('url');
		$('.template-3_video iframe').attr('src', `https://www.youtube.com/embed/${_url}`);
	});
	
	$('.toggle-expandedList').click(function (e) {
		expandedList($('.toggle-expandedList'));
	});
	
	function copyClipBoard(elm, phone) {
		let createTextarea = document.createElement('textarea');
		createTextarea.style.cssText = 'position: absolute; left: -99999px';
		createTextarea.setAttribute("id", "textareaCopy");
		document.body.appendChild(createTextarea);
		let textareaElm = document.getElementById('textareaCopy');
		textareaElm.value = phone;
		textareaElm.select();
		textareaElm.setSelectionRange(0, 99999);
		let status = document.execCommand("copy");
		if (status) alert('Đã copy');
		textareaElm.remove();
	}
	
	$(document).on("click", ".get-phone", function (e) {
		e.preventDefault();
		$(this).addClass('copy-phone');
		$(this).html(`${$(this).data('phone')} · <span>Sao chép</span>`);
	});
	
	$(document).on('click', '.copy-phone', function (e) {
		e.preventDefault();
		copyClipBoard($(this), $(this).data('phone'));
	});
	
	const imageNav = new Swiper('.preview-images-nav', {
		spaceBetween: 10,
		slidesPerView: 6,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		
	});
	const imageAvatar = new Swiper('.preview-images-avatar', {
		thumbs: {
			swiper: imageNav,
		}, pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		}, navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	
	$('.toggle-expandedContent').click(function (e) {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).find('a').html('Thu gọn <i class="fal fa-angle-up"></i>');
			$(this).prev('.content').removeClass('expanded');
		} else {
			$(this).addClass('active');
			$(this).find('a').html('Xem thêm <i class="fal fa-angle-down"></i>');
			$(this).prev('.content').addClass('expanded');
		}
	});
	
	const related = new Swiper('#swiper-related', {
		slidesPerView: 3,
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
				slidesPerView: 1.4,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2.4,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3.4,
				spaceBetween: 15,
			},
		}
	});
	
	const viewed = new Swiper('#swiper-viewed', {
		slidesPerView: 3,
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
				slidesPerView: 1.4,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2.4,
				spaceBetween: 15,
			},
			1024: {
				slidesPerView: 3.4,
				spaceBetween: 15,
			},
		}
	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('.template-3_fixed').addClass('show');
		} else {
			$('.template-3_fixed').removeClass('show');
		}
	});
	
	$(document).on("click", ".callModal", function () {
		$('.modal').modal('hide');
		$('#' + $(this).data('modal')).modal('show');
		setTimeout(function () {
			$('body').addClass('modal-open');
		}, 500)
	});
	
	$('.template-3_form .search-tab li').click(function (e) {
		$('.template-3_form .search-tab li').removeClass('active');
		$('.template-3_form .search-tab li input').prop('checked', false);
		$(this).addClass('active');
		$(this).find('input').prop("checked", true);
		console.log($(this).find('input'));
	});
});