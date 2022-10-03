$(document).ready(function(){


    $('#menuBar').on('click',function(){
      $('#list').addClass('show');
    })
    $('#closeBar').on('click',function(){
      $('#list').removeClass('show');
    });
  
    

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 250) { // Set position from top to add class
            $('nav').addClass('nav-appear');
        }
        else {
            $('nav').removeClass('nav-appear');
        }
      });
      $(window).scroll(function(){
        if($(window).scrollTop() > 300){
          $('.back-to-top').css({
            "opacity":"1", "pointer-events":"auto"
          });
        }else{
          $('.back-to-top').css({
            "opacity":"0", "pointer-events":"none"
          });
        }
      });
      $('.back-to-top').click(function(){
        $('html').animate({scrollTop:0}, 500);
      });
    

    


      // search-box open close js code
let nav = document.querySelector(".nav");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
    nav.classList.toggle("showInput");
    if(nav.classList.contains("showInput")){
      searchBox.classList.replace("bx-search" ,"bx-x");
    }else {
      searchBox.classList.replace("bx-x" ,"bx-search");
    }
  });

  //  main carousel (home page)
  $('.header-mobile').owlCarousel({
    items:1,
    loop:true,
    margin:0,
    responsiveClass:true,
    nav:false,
    dots:false,
    // center:false,
    autoplay: true,
    autoplayHoverPause:true,
    slideSpeed: 200,
    // paginationSpeed: 5000,
    autoplaySpeed:200,
    smartSpeed:1000,
    responsive:{
       
        576:{
            dots:true,
        },
        
    }
  })

  
    $(".counter-2").counterUp({
      delay:10,
      time:1200,
    });

  



  
        // Init Scrollspy
        $('body').scrollspy({
          target: '#main-nav'
      });
  
      // Smooth Scrolling
      $("#main-nav a").on('click', function(event) {
          if (this.hash !== "") {
              event.preventDefault();
  
              const hash = this.hash;
  
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              }, 800, function() {
  
                  window.location.hash = hash;
              });
          }
      });


      
  
      // mobile bottom navigation (max-width 576px)
      $(document).ready(function() {
        $(".bottom-navigation-item").click(function () {
            $(".bottom-navigation-item").removeClass("active"); 
            $(this).addClass("active");   
        });
        });
  
  })
   
  
    
     
     
  
    