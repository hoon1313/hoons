$(document).ready(function () {
    $(".depth2").hide();

    /* 1차메뉴 GNB의 li에 hover시, 그 자식요소 children의 depth2가 슬라이드 */
    $(".gnb > li").hover(function () {
        $(this).children(".depth2").stop().slideToggle();
    });
});