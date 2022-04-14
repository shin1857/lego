
//mobile-footer
$(document).ready(function(){
  

$('.fo_btn').click(function(a){
  a.preventDefault();
  var i = $('.fo_btn').index(this);
   $('.fo_up .hide').eq(i).slideToggle();
  });
});

//햄버거
$(function(){
  $('#gnb .bars').click(function(){
    $('#gnb > .depth1 > li.close').slideToggle();
    $('.bg').slideToggle();
  });
});




$(document).ready(function(){

  //tabmenu
  $('.tab_title li').click(function(){
    var idx = $(this).index();
    $('.tab_title li').removeClass('on');
    $('.tab_title li').eq(idx).addClass('on');
    $('.tab_cont > div').hide();
    $('.tab_cont > div').eq(idx).show();
  });

  //main slide
  $(function(){
    const slider = document.querySelector('.items');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    slider.addEventListener('mousedown', e => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
  
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
  
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
  
    slider.addEventListener('mousemove', e => {
      if (!isDown) return; 
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      slider.scrollLeft = scrollLeft - walk;
    });
  });


});

  
$(document).ready( function() {
  AOS.init();
});

 


