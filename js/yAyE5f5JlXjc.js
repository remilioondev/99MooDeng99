
window.setTimeout(function(){
$(".loading").fadeOut(500)
},400)

$(document).ready(function(){
	$(window).load(function () {
          $(".mobile-inner-header-icon").click(function(){
            $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
            $(".mobile-inner-nav").slideToggle(250);
          });
          $(".mobile-inner-nav li").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });
          $(".mobile-inner-nav li").click(function(){
            $(this).find('dl').slideToggle(200)
          })
        });

})

$(document).ready(function(){

$(".section2 .left>*").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });

$(".section2 .right>*").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });

$(".section3 .con2 .item").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });




$('.section1 .left,.section2 .left>*').not('.section2 .video').addClass('wow fadeInLeft')


$('.section1 .right,.section2 .right>*').not('.section2 .horse').addClass('wow fadeInRight')

$('.section3 .content > *,.section4 .content').addClass('wow fadeInUp')


$('.section1 .img2,.section2 .video').addClass('wow rubberBand')

$('.section2 .horse').addClass('wow zoomInDown')

$('.section3 .con2 .item').addClass('wow zoomInUp')

$('.section4 .title').addClass('wow fadeInDown')


$('.section3 .con1 .imgbox img.img1,.section3 .con1 .dec p').addClass('wow zoomIn')

$('.section1 .aniBg i').addClass('wow scalcAni')


var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();




function height(){
  var sc = $(window).scrollTop();
  if (sc > 200) {
      $("body").addClass("current");
    } else {
      $("body").removeClass("current");
    }
}
height()
$(window).scroll(function () {
  height()
});






});