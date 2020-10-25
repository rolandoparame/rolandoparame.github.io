// Fade in on load
$('#particles-js').delay(0).animate({'opacity':'1'},1500);
// $('.typewriter-second').delay(0).animate({'opacity':'1'},1500);
// $('.subtitle').delay(2000).animate({'opacity':'1'},2500);
// $('#portfolioBtn').delay(2000).animate({'opacity':'1'},2500);

// // on hover of nav link, transition 0.5sec font color to blue using .highlight
// $('.nav-item').click(function(){
//     // $(this).
// });


// //on click of nav link, keep selected nav link heading in navbar color blue
// $('.nav-item').click(function(){
//     alert("clicked nav");
// });

$(document).ready(function(){
    var view = {};
    
    var checkPosition = function(){
       var elem = $('.fadein'), top = elem.offset().top;
    
                    if (top - view.limit < 300) {
                        elem.css('display','none'); 
                    }
                };
    
           $(window).bind('scroll', function() {
    
                view.top = $(window).scrollTop();
                view.limit = view.top + $(window).height();
    
                checkPosition();
            }); 
    
    });