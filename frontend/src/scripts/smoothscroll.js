$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var target = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          var dataOffset = -1;
          if($( window ).width() <= 500 || target === "#top") {
              dataOffset = 350;
          }
          $('html, body').stop().animate({
            scrollTop: $(target).offset().top - dataOffset
          }, 500);
          // 25
          // 350
        } // End i
    });
  });