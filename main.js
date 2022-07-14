

// Global Variables 

let menuButton = document.getElementById('menu_button');
let contact = document.getElementById('contact_link');
let projects = document.getElementById('projects_link')

// Functions Mobile menu 

menuButton.addEventListener('click', function(){

    let menu = document.getElementById("menu");
    menu.classList.toggle('show_menu');

    let body = document.getElementById("body");
    body.classList.toggle('stop_scroll');
    
    
});

contact.addEventListener('click', function(){

    let menu = document.getElementById("menu");
    menu.classList.remove('show_menu');

    let body = document.getElementById("body");
    body.classList.remove('stop_scroll');
})


projects.addEventListener('click', function(){

    let menu = document.getElementById("menu");
    menu.classList.remove('show_menu');

    let body = document.getElementById("body");
    body.classList.remove('stop_scroll');
})




$(function(){
    var scroll = $(document).scrollTop();
    var navHeight = $('.header').outerHeight();

    $(window).scroll(function(){
        var scrolled = $(document).scrollTop();

        if(scrolled > navHeight){
            $('.header').addClass('animate');
        }else{
            $('.header').removeClass('animate');
        }

        if(scrolled > scroll){
            $('.header').removeClass('sticky');
        }else{
            $('.header').addClass('sticky');
        }

        scroll = $(document).scrollTop();

    });


});
