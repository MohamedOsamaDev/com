
    // conect custom cursor with mouse 
    document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
        e.style.left = n.pageX + "px", 
        e.style.top = n.pageY + "px"
     });
     var 
     e = document.getElementById("cursor");
     //end custem mouse 
     // Start custom cursor 

     //END ustom cursor 

     
        
     $('.btnshow').click(function (){
        mood ='notok';
        $('.menu-mobile').fadeIn();
        $('nav').removeClass("activenav");


        if ( $('.menu-mobile').fadeIn() ) {
            $('.btnshow').css("display" , "none");
            $('.back').css("display" , "block");
            $('body').css({overflow:"hidden "});
                  }
        });
        function closemenuo() {
            mood ='ok';
            $('.menu-mobile').fadeOut();
            $('.btnshow').css("display" , "block");
            $('.back').css("display" , "none");
            $('body').css({overflow:"scroll"});
            if (scrollY > 10) {
                $('nav').addClass("activenav");
            } 
        }
            $('.back').click(function (){
                closemenuo()
               
        
                });
                $('.menu-mobile').click(function (){
                    closemenuo()
                   
            
                    });

               
        //popup work section
        $('.jslav').click(function(){
            $('.image').removeClass('popimgrest');
            $('.popimg').attr("src",'images/lav-copy-1360x1280.png')
            $('.popup p').replaceWith('<p class="jstextp">Pure Code, Selected Work, UIUX Design</p>')
            $('.popup h2').replaceWith('<h2 class="jstexth">la Vitesse</h2>')
            $('.popup a').replaceWith(' <a href="https://la-vitesse-media.com/"   target="_blank">View project</a>')
            $('body').css({overflow:"hidden"});
            $('.popup').fadeIn();
            
    
            
          });
          
          //popuptwo 
          $('.jsgiza').click(function(){
            $('.image').removeClass('popimgrest');
          $('.popimg').attr("src",'images/gsd-copy-1360x1280.png')
          $('.popup p').replaceWith('<p class="jstextp">Pure Code, Selected Work, UIUX Design</p>')
          $('.popup h2').replaceWith('<h2 class="jstexth">Giza Systems Distributio</h2>')
          $('.popup a').replaceWith(' <a href="https://www.gsd.com.eg/"   target="_blank">View project</a>')
                 
          $('body').css({overflow:"hidden"});
          $('.popup').fadeIn();
            
          });
          $('.itechbro').click(function(){
            $('.image').removeClass('popimgrest');
            $('.popimg').attr("src",'images/itechpro-copy-1360x1280.png')
            $('.popup p').replaceWith('<p class="jstextp">Pure Code, Selected Work, UIUX Design</p>')
            $('.popup h2').replaceWith('<h2 class="jstexth">ItechPro</h2>')
            $('.popup a').replaceWith(' <a href="https://itechpro-eg.com/"   target="_blank">View project</a>')
                   
            $('body').css({overflow:"hidden"});
            $('.popup').fadeIn();
              
            });
            $('.ABCbank').click(function(){
                $('.image').removeClass('popimgrest');
                $('.popimg').attr("src",'images/abc-copy-1360x1280.png')
                $('.popup p').replaceWith('<p class="jstextp">Pure Code, Selected Work, UIUX Design</p>')
                $('.popup h2').replaceWith('<h2 class="jstexth">ABC Nursery</h2>')
                $('.popup a').replaceWith(' <a href="https://www.abc-daynursery.co.uk/"   target="_blank">View project</a>')
                       
                $('body').css({overflow:"hidden"});
                $('.popup').fadeIn();
                  
                });
                $('.img').click(function(){
                    
                    $('.popimg').attr("src",'images/me2.jpg');
                    $('.image').addClass('popimgrest');
                    $('.popup p').replaceWith('<p class="jstextp">Web Developer</p>');
                    $('.popup h2').replaceWith('<h2 class="jstexth">Mohamed Osama</h2>');
                    $('.popup a').replaceWith('<a href="portolio.html" target="_blank">View Portoflio</a>');
                               
                    $('.popup').fadeIn();
                    $('body').css({overflow:"hidden"});
                          
                  });
        //btn close
        $('.close').click(function(){
            $('.popup').fadeOut();
            $('body').css({overflow:"scroll"});
            $('.image').removeClass('popimgrest');
          });
          // close if click on background
          $('.popup').click(function(){
              $('.popup').fadeOut();
              $('body').css({overflow:"scroll"});
              
          });
    //select work
    $('.Allwork').click(function(){
        $('.box_work li').css("color", "#ccc");
        $(this).css("color", "#d20707");

      
       
       $('.works .boxes .box').css("opacity" , "0");
       setTimeout(()=> {

           $('.works .boxes .box').css("opacity" , "1");
           $('.works .boxes .box').css("display" , "block");
           },400);
    });
    $('.Wordpresswork').click(function(){
        $('.box_work li').css("color", "#ccc");
        $(this).css("color", "#d20707");
        $('.works .boxes .box').css("opacity" , "0");
        setTimeout(()=> {
            $('.works .boxes .box').css("opacity" , "1");
            $('.works .boxes .box').css("display" , "none");
            $('.works .boxes .wordPress').css("display" , "block");
            },400);
     });
     $('.purecodework').click(function(){
        $('.box_work li').css("color", "#ccc");
        $(this).css("color", "#d20707");
       
 
        $('.works .boxes .box').css("opacity" , "0");
        setTimeout(()=> {
            $('.works .boxes .box').css("opacity" , "1");
            $('.works .boxes .box').css("display" , "none");
            $('.works .boxes .pureCode').css("display" , "block");
            },400);
     });
     $('.designWorkDesign').click(function(){
        $('.box_work li').css("color", "#ccc");
        $(this).css("color", "#d20707");
      
        
        $('.works .boxes .box').css("opacity" , "0");
        setTimeout(()=> {
            $('.works .boxes .box').css("opacity" , "1");
            $('.works .boxes .box').css("display" , "none");
            $('.works .boxes .design').css("display" , "block");
            },400);
     });

