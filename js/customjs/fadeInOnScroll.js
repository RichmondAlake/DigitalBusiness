$(document).ready(function (){
    
    //adding fadein effect when page is scolled (need to reverse the effect)
    $(window).scroll( function (){
       $('.fadeOnScroll').each( function (i){
           
           var bottomOfObject = $(this).position().top + $(this).outerHeight();
           var bottomOfWindow = $(window).scrollTop() + $(window).height();
           
           bottomOfWindow = bottomOfObject + 200;
           
           if (bottomOfWindow > bottomOfObject){
               $(this).animate({'opacity' : '1'}, 1000);
               
           }
       })
    });
});