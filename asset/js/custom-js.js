// Smooth Scroll
$(document).ready(function  ()  {
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
  
        window.location.hash = hash;
      });
    } 
  });
});



// Back to top	
/* $(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        
    $('#return-to-top-btn').fadeIn(200);   
  } else {
    $('#return-to-top-btn').fadeOut(200);   
  }
});
$('#return-to-top-btn').click(function() {      
  $('body,html').animate({
      scrollTop : 0                       
  }, 500);
}); */