AOS.init();


$(".header-btn").on("click",function(){
  $(".nav-list-hamburger").slideToggle();
  $(".top-line, .center-line, .bottom-line").toggleClass("open");
})

$(".nav-list-hamburger li").on("click",function(){
  $(".nav-list-hamburger").slideToggle();
  $(".top-line, .center-line, .bottom-line").toggleClass("open");
})
