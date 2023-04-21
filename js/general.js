
function input_number(){
  $(".input-btn-wrapper .plus-btn").click(function(){
var value = $(this).closest(".input-box").find("input")

 if(value.val()>9){
  alert("not allowed more than 10")
  value.val()=10
}
else {
  value.val(parseInt(value.val())+1)
}
// value.change()
// return false
  })
  $(".input-btn-wrapper .minus-btn").click(function(){
   var  value=$(this).closest(".input-box").find("input")
   
    if(value.val()<=0){
      alert("not allowed negative number")
      value.val()=0
    }
   
    else{
    
      value.val(parseInt(value.val())-1)
    }
    // value.change()
    // return false
  })
}


$(document).ready(function () {
  $(".heading-close-button").click(function () {
    $(".heading").slideUp(300);
  });

  $("select").change(function () {
    var img = this.value;
    $(".flag img").attr("src", img);
  });

  $(".close-button").click(function () {
    $(".header .nav-menu").css("width", "300px");
    $(".header .owerlly").css("display","block");
  });

  $(".close-button.change").click(function () {
    $(".header .nav-menu").css("width", "0");
    $(".header .owerlly").css("display","none");
  });
  
$(".header .owerlly").click(function(){
  $(this).css("display","none");
  $(".header .nav-menu").css("width", "0");
})
  $(".search-button").click(function () {
    $(".search-box").css("width","100%");
  });
  
  $(".close-btn").click(function () {
    $(".search-box").css("width","0");
  });
  if($(window).width()<=768){
    $(".sub-menu").hide()
    $(".sub-item").click(function(){
      $(this).find(".sub-menu").toggle()
      $(this).toggleClass("open")
      $(".sub-menu").not($(this).find(".sub-menu")).hide()
      $(".sub-item").not($(this)).removeClass("open")
    })
  }

  $(".slider-content").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite:true,
    fade: true,
    dots: false,
 
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-content",
    arrows: false,
    focusOnSelect: true,
    centerMode: true,
    dots: false,
    centerPadding:30,  
    infinite:true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 768,
        settings: {
               slidesToShow: 4
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]

  });
  input_number()
});


// dropkick
$("#dropkick1").dropkick({
  mobile: true,
});
$("#dropkick2").dropkick({
  mobile: true,
});
$("#dropkick3").dropkick({
  mobile: true,
});
