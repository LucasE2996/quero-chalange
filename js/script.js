$('a[href^=#main]').on("click",function(e) {
    var t= $(this.hash);
     var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
     if(t.length){
         var tOffset=t.offset().top;
         $('html,body').animate({scrollTop:tOffset-500},'slow');
         e.preventDefault();
     }
 });
 
 $('a[href^=#article-02]').on("click",function(e) {
    var t= $(this.hash);
     var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
     if(t.length){
         var tOffset=t.offset().top;
         $('html,body').animate({scrollTop:tOffset-0},'slow');
         e.preventDefault();
     }
 });
 
 $('a[href^=#article-03]').on("click",function(e) {
    var t= $(this.hash);
     var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
     if(t.length){
         var tOffset=t.offset().top;
         $('html,body').animate({scrollTop:tOffset-0},'slow');
         e.preventDefault();
     }
 });

/**
 * Scrolling effect.
 */
 jQuery("document").ready(function($) {
         
    var nav = $('.menu-bar');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 75) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
});