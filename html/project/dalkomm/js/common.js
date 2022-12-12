$(document).ready(function () { // 문서준비 이벤트 시작
    /* aos */
    AOS.init();
    /* 비디오 재생 */
    $('.btn_play').click(function () {
        $('.movie')
            .fadeIn()
            .css({'display': 'block'});
    });
    $('.movie_close').click(function () {
        $('.movie').css({'display': 'none'});
    });

    /* 메뉴 슬라이드 */
    $("#img_slider .is_img .menu").mouseenter(function () {
        $("#img_slider .is_img .menu").css({'animation-play-state': 'paused'});
        $("#img_slider .btn_detail").css({'opacity': '1'});
    });
    $("#img_slider .is_img .menu").mouseleave(function () {
        $("#img_slider .is_img .menu").css({'animation-play-state': 'running'});
        $("#img_slider .btn_detail").css({'opacity': '0'});

    });
    $("#img_slider .btn_detail").hover(function () {
        $(this).css({'opacity': '1'});
    });

    /* 모바일 뉴스 슬라이드 */

    /* footer 2차메뉴 */
    $("#footer .ft_list_title .btn_down").click(function () {
        $(this).siblings('#footer .footer_depth2').stop().fadeToggle();
            

    });

    // /* 팝업메뉴 */     $(".popup_close").click(function () { $('.popup').slideUp();
    // })          
    /* mdepth2 메뉴 */
    $(".mgnb_wrap").hide();
    $(".mdepth2").hide();
    $(".mgnb > li").click(function () {
        $(this).children('.mdepth2').stop().slideToggle();
        $(this).siblings().children(".mdepth2").slideUp();
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").fadeOut();
    })
    // $(".btn_sitemap_mobile").click(function () { $('.mgnb_wrap').animate({
    // 'left': '0',         })     }); $(".mgnb_close").click(function () {
    // $('.mgnb_wrap').animate({ 'left': '100%',         })     });     /* search 메뉴
    // */ $(".search").hide();     $(".btn_search").click(function () {
    // $(".search").fadeIn();     });     $(".search_close").click(function () {
    // $(".search").fadeOut();     });     /* sitemap */     $('.sitemap').hide();
    // $('.btn_sitemap').click(function () {         $('.sitemap').fadeIn();
    // $('body').css({'overflow': 'hidden'}); /* 스크롤바 제거 */     });
    // $('.sitemap_close').click(function () {         $('.sitemap').fadeOut();
    // $('body').css({'overflow': 'auto'}); /* 스크롤바 생성 */     });     /* language */
    // $('.language ul').hide();     $(".language").click(function () {
    // $('.language').toggleClass('active');         $('.language ul
    // ').slideToggle();     });

    /* depth2 메뉴 */
    $(".depth2").hide();
    
    $(".gnb > li ").hover(function () {
        $(this).children(".depth2").stop().fadeToggle(250);

    });

    /* mgnb */
    $('.ham').click(function () {
        $(".mgnb_wrap").show();
    })
    /* main_banner slide */
    const mb = new Swiper('.mb', {
        // 자동 슬라이드 설정, 비활성화 false
        autoplay: {
            delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000,
        /* 슬라이드 전환시간 */
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        /* 슬라이드 반복여부 */
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        },
        pagination: {
            el: '.swiper-pagination', // 버튼 태그 설정
            type: 'bullets', // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true, // 버튼 클릭 여부
        }
    });

    /* 뉴스메뉴 슬라이드 */
    const event = new Swiper(".event", {
        speed: 1000,
        loop : true,
        pagination: {
            el: '.swiper-pagination', // 버튼 태그 설정
            type: 'bullets', // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true, // 버튼 클릭 여부
        }
    });

    // $('.mb_play').hide();     $('.mb_pause').click(function () {         mb
    // .autoplay             .stop();         $('.mb_pause').hide();
    // $('.mb_play').show();     });     $('.mb_play').click(function () { mb
    // .autoplay             .start();         $('.mb_pause').show();
    // $('.mb_play').hide();     });     /* 제품 슬라이드 */     const product_list = new
    // Swiper('.product_list', {          자동 슬라이드 설정, 비활성화 false         autoplay: {
    // delay: 3000,  슬라이드가 머무르는 시간, 5000=5초             disableOnInteraction: false,
    // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음         },         speed: 1000,
    // slidesPerView: '2',         spaceBetween: 20,         centeredSlides: true,
    // loop: true,         scrollbar: {             el: ".swiper-scrollbar", hide:
    // false         },          반응형 슬라이드         breakpoints: { 1000: {  가로해상도가
    // 768px 이상일 경우                 slidesPerView: 2, spaceBetween: 20
    // },             1200: {  가로해상도가 1024px 이상일 경우 slidesPerView: 4,
    // spaceBetween: 20             }, 1600: {  가로해상도가 1024px 이상일 경우
    // slidesPerView: 6, spaceBetween: 20             }         }     });     /* 탭
    // 메뉴 */ $(".img02, .img03, .img04").hide(); $('.teaware_list li
    // span').click(function () {     $(this).siblings('.teaware_img').fadeIn();
    // $(this).parent().siblings().find('.teaware_img').fadeOut(); });
    // $('.teaware_list li:first-child').addClass('active');     $('.teaware_list
    // li').click(function () {         $(this).addClass('active');         $(this)
    // .siblings()             .removeClass('active');     });     /* 아코디언 배너 */
    // $(".museum_list li:first-child").addClass('on');     $(".museum_list
    // li").mouseenter(function () {         $(this).addClass('on');         $(this)
    // .siblings()             .removeClass('on');     });

}); // 문서준비 이벤트 끝