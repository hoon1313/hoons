$(document).ready(function () {




    $(".depth2").hide();

    /* 1차메뉴 GNB의 li에 hover시, 그 자식요소 children의 depth2가 슬라이드 */
    $(".gnb > li").hover(function () {
        $(this).children(".depth2").stop().slideToggle(200);
    });


    var swiper = new Swiper(".swiper", {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: ".swiper-pagination",
          type : 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
clickable : true,  // 버튼 클릭 여부
        },
      });

});