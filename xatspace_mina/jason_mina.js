(function(){

    const container = document.querySelector(".jd-content-cart");
    var i = 0;
    var box = '';
    
    while(i < gifs.length){

        var img = gifs[i].img;
        var modelo = gifs[i].modelo;

        if(modelo < 10) modelo = "0"+modelo; else modelo;

        box = '<div class="jd-cart">'+
                '<div class="jd-box-gif">'+
                    '<img src="'+img+'" />'+
                '</div>'+
                '<span>Modelo: '+modelo+'</span>'+
              '</div>';

        container.innerHTML += box;

        i++;
    }
    
})();
