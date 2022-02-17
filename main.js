$(document).ready(function(){
    //jquery for toggle sub manus   
    $('.sub-btn').click(function(){
     $(this).next('.sub-manu').slideToggle();
     $(this).find('.dropdown').toggleClass('rotate');
     });
     $('.second-sub-manu').click(function(){
     $(this).find('.dropdown').toggleClass('rotate');
     });
   
   
     //jquery for and collapse the sidebar
     $('.manu-btn').click(function(){
         $('.side-bar').addClass('active');
        $('.manu-btn').css("visibility","hidden");
        $('#search-icon').css("visibility","hidden");
        $('#search-closer').css("visibility","hidden");
        $('.search-form').css("visibility","hidden");
        $('#featured').css("visibility","hidden");
     });
     $('.close-btn').click(function(){
         $('.side-bar').removeClass('active');
         $('.manu-btn').css("visibility","visible");
         $('#search-icon').css("visibility","visible");
         $('.search-form').css("visibility","visible");
         $('#featured').css("visibility","visible");
     });
     //search icons
     $('#search-icon').click(function(){
         $('.search-form').addClass('active');
        $('#search-icon').css("visibility","hidden"); 
        $('#search-closer').css("visibility","visible"); 
       
     });
     $('#search-closer').click(function(){
         $('.search-form').removeClass('active');
        $('#search-closer').css("visibility","hidden"); 
        $('#search-icon').css("visibility","visible"); 
        
     });
   });

   window.addEventListener('DOMContentLoaded', function() {
    $(function() {
        var clipboard = new ClipboardJS('.copybutton');   
         $(".copybutton").click(function() { 
                 $(this).html('Copied'); 
                  var that = $(this);
                  var intrvrl =  setInterval(function(){  
                  that.html('Copy'); 
                  clearInterval(intrvrl); }, 
                10000);
         });
    });
        });

     const ulTag = document.querySelector("ul");
     let totalPages = 100;   
   
    function element(totalPages, page){
        let liTag = '';
        let activeLi;
        let beforePages =  page -1;
        let afterPages =  page +1;
        if(page > 1){
            liTag += `<li class="btn prev" onclick="element(totalPages, ${page -1})"><a href="http://"><i class="fas fa-angle-left"></i>Prev</a></li>`;
        }
        
          for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
              if(page == pageLength){
                  activeLi = "active";
              }else{
                activeLi = "";
              }
              liTag += ` <li class="numb ${activeLi}"><a href="http://">${pageLength}</a></li>`;
              
          }
        
        if(page < totalPages){
            liTag += `<li class="btn next" onclick="element(totalPages, ${page +1})"><a href="http://">Next<i class="fas fa-angle-right"></i></a></li>`;
        }
        ulTag.innerHTML = liTag;
    }    
    element(totalPages,5);