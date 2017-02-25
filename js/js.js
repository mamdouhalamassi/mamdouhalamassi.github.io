$(function(){
    // Navbar Activation
    $(".button-collapse").sideNav();    
    
    // Slider Activation
    $('.slider').slider();
    
    // Our work  Section 
    $("#btn-all").click(function(){
        $(".items .item").slideDown(1000);
    });

    
    $("#btn-web").click(function(){
        $(".items .mobile").slideUp();
        $(".items .desk").slideUp();
        $(".items .web").slideUp();
        $(".items .web").slideDown(1000);
    });

    
    $("#btn-mobile").click(function(){
        $(".items .mobile").hide("slow");
        $(".items .desk").hide("slow");
        $(".items .web").hide("slow");
        $(".items .mobile").show(1000);
    });

    $("#btn-desk").click(function(){
        $(".items .mobile").slideUp();
        $(".items .desk").slideUp();
        $(".items .web").slideUp();
        $(".items .desk").slideDown(1000);
    });

    
    // Parallax Activation
    $('.parallax').parallax();
    
    //smooth Scroll
    $("a").click(function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        },1000)
    });
        
    
});



 // Loading Screen
$(window).on("load", function (e) {
  $(".preloader-wrapper").fadeOut(2000,
      function(){
        $(this).parent().fadeOut(1500).remove()
  }); 
})





