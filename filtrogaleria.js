$(function () {
    
    

    let equipo = $('#galeria').offset().top,
        
        trabajo = $('#mapa').offset().top,
        
        contacto = $('#contacto').offset().top;
        
       

    window.addEventListener('resize', function(){
        let equipo = $('#galeria').offset().top,
        
        trabajo = $('#mapa').offset().top,
        
        contacto = $('#contacto').offset().top;
        
       
    });


    $('#enlace-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: equipo -100
        },600);
    });

   

    $('#enlace-mapa').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: trabajo -100
        },600);
    });


    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto -100
        },600);
    });

});