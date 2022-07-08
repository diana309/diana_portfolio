
// Mobile menu 

// Global Variables 

let menuButton = document.getElementById('menu_button');

menuButton.addEventListener('click', function(){

    let menu = document.getElementById("menu");
    menu.classList.toggle('show_menu');

    let body = document.getElementById("body");
    body.classList.toggle('stop_scroll');
    
    
});


