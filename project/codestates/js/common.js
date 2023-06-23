$(document).ready(function () { // 문서준비 이벤트 시작
    /* aos */
    AOS.init();

    const mb = new Swiper(".mb", {
        autoplay: true,
        speed: 1000,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
    /* 후기 */
    const review = new Swiper('.review', {
        // 옵션
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        }
    });

    /* 카드메뉴 */
    /* gnb */
    $(".depth2").hide();
    $(".gnb > li").hover(function () {
        $(this)
            .children(".depth2")
            .stop()
            .slideToggle(200);
    });

    $(".depth3").hide();
    $(".depth2 > li").hover(function () {
        $(this)
            .children(".depth3")
            .stop()
            .fadeToggle();
    });

    $(".mgnb_wrap").hide();

    $(".ham").click(function () {
        $(".mgnb_wrap")
            .stop()
            .fadeIn();
    });

    $(".mgnb_close").click(function () {
        $(".mgnb_wrap")
            .stop()
            .fadeOut();
    });

    $(".mdepth2").hide();
    $(".mgnb > li ").click(function () {
        $(this)
            .children('.mdepth2')
            .stop()
            .slideToggle();
        $(this)
            .siblings()
            .children(".mdepth2")
            .slideUp();
    });
}); // 문서준비 이벤트 끝