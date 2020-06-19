$(document).ready(function(){
   const mMenuBtn = $('.m-menu-button');
   const mMenu = $('.m-menu');
   const tab = $('.tab');
   mMenuBtn.on('click',function()
   {
      mMenu.toggleClass("active");
      $('body').toggleClass('no-scrol');
   })


   tab.on('click',function()
   {
      tab.removeClass('active');
     $(this).toggleClass('active');
     $('.tabs-content').removeClass('visiable');
     let activeTabContent= $(this).attr('data-target');
     $(activeTabContent).toggleClass('visiable');
   }
   );
   var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 25,
      breakpoints: {
         992: {slidesPerView: 4,},
         768: {
            slidesPerView: 2,
         },
         320: {
            slidesPerView: 1,
            SlidesOffsetAfter: 50,
            navigation: {
               nextEl: '.button-next',
            }
         },
      }
    })
});
