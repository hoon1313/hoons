$(document).ready(function(){

/* 전체메뉴 */
$(".title .btn").click(function(e){
    e.preventDefault();
    $(".nav").stop().slideToggle();
    $(".title .btn").toggleClass("open");

    if($(".title .btn").hasClass("open")) {
        //open class가 있을 때
        $(".title .btn").find("i").attr("class","fa fa-angle-up");
    }
    else{
        //open class가 없을 때
        $(".title .btn").find("i").attr("class","fa fa-angle-down");
    }
});
$(window).resize(function(){
    let wWidth = $(window).width();
        $(".nav").removeAttr("style");
})

/* 슬릭슬라이더 */

    $('.slider').slick({
        dots: true,
        arrows:true,
        autoplay : true,
        autoplaySpeed : 3000,
        responsive : { 
            breakpoint:768,
            settings : {
                arrows:true,
                dots:false, 
                autoplay : false
            }
        }
    });

$(".lightbox").lightGallery({
}); 
    
});
