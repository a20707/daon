$(function(){
//start    
    $('.head').load('common_menu.html header',header);
    $('.foot').load('common_menu.html footer');
    $('aside').load('common_menu.html aside ul');   

    function header(){
        
    const menu = document.querySelector('.menu-trigger');
    const allshow = document.querySelector('.all_menu');    
    menu.addEventListener('click',function(){
        document.querySelector('body').classList.toggle('active');   
        menu.classList.toggle('active');
        allshow.classList.toggle('active');
    });  
        
    }
    
    $(function(){
                
        //바닐라 스크롤Y / 제이커리는 scrollTop
        
        function asideScroll(){
            var mainRom = $('.main_room').scrollTop();
            var main = $('main').find('section').eq(0).offset().top;
            var top = $(window).scrollTop();
            
            if(top > mainRom || top > main ){
                $('aside').addClass('active');
            }else{
                $('aside').removeClass('active');
            }
        }
        $(window).on('scroll',asideScroll);

   });
    
    

    
//end    
})
