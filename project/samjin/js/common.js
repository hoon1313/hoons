$(document).ready(function () { // 문서준비 이벤트 시작
    /* aos */
    AOS.init();

    var mb = new Swiper(".mb", {
        direction: "vertical",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // autoplay : {
        //     delay : 3000,  // 슬라이드가 머무르는 시간, 5000=5초
        //     disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        //   },
          loop:true,
          speed : 1000,
    });
    var mv = new Swiper(".movie", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          loop : true,
   });

    
var tip = new Swiper(".tip", {
pagination : {
el : '.swiper-pagination',  // 버튼 태그 설정
type : 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
clickable : true,  // 버튼 클릭 여부
},
        loop : true,
    autoplay: {
        delay: 5000,
    } 
});
    

    
var ms = new Swiper(".ms", {
pagination : {
el : '.swiper-pagination',  // 버튼 태그 설정
type : 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
clickable : true,  // 버튼 클릭 여부
},
        loop : true,
    autoplay: {
        delay: 5000,
    } 
});
    

    /* 2차메뉴 */
    $(".depth2").hide();

    $(".gnb > li").hover(function () {
        $(this).children(".depth2").stop().slideToggle(150);
    });
    
    
}); // 문서준비 이벤트 끝