$(document).ready(function(){

    $(".sitemap_menu").hide();
    $(".category .total").hover(function(){
        $(".sitemap_menu").stop().slideDown(200);
    })
    $(".sitemap_menu").mouseleave(function(){
        $(".sitemap_menu").stop().slideUp(200);
    })


    /* 배너 슬라이드 */
    $('.banner_img').slick({
        dots : true
    });


    /* 선물세트 슬라이드 */
    $('.set_slide').slick({
        autoplay:true,
        autoplaySpeed : 3000,
        speed : 1000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows:false
    });

/* 레시피 슬라이드 */
    $('.recipe_wrap').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 400,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        swipeToSlide: true,
        responsive: [
                        {
                            breakpoint: 1650,
                            settings: {
                                slidesToShow: 5,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 1400,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1
                            }
                        }
                    ]
    });




  $('.set_slide').hover(function(){
    $('.set_slide').slick({
        autoplay:false
    });

})
     // 자식 요소를 숨김
  $('.family > ul > li > ul').hide();

  // Family Site의 li 요소를 클릭하면 자식 요소를 슬라이드 업/다운하여 나타냄
  $('.family > ul > li').click(function(e) {
    e.preventDefault();
    $(this).children('ul').toggle();
  });


});