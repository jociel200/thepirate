(function(){

    var content = document.querySelector(".jd-gallery");
    var i = 0;
    
    var box = '';
    var bg = $(".jd-gallery").attr("data-screen");
    console.log(bg)

    function initBgs(){

        $(".jd-title").html('Home')
        
        $(".box-home").css({
            "background-image":"url('"+bg+"')",
            "background-size":"cover"
        })
    }

    initBgs();

    $("#home").on('click', function(){

        $(".jd-container").html("");

        $(".jd-title").html("Home");

        content.innerHTML = '<div class="box-home" style="background-image:url('+bg+')"></div>';

        $(".jd-container").html(content);

    })
    
    $("#pcb").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('Galeria de Pcbacks');

        var listModelsSimple = modelos.filter(modelo => modelo.type === 'pcback');
        var y = 0;

        while(y < listModelsSimple.length){

            pcb_img = listModelsSimple[y].img;

            box = `<div class="jd-box-img">\
                        <img src="${pcb_img}">\
                        <a href="${pcb_img}" target="_blank"><i class="bx bx-zoom-in"></i></a>\
                    </div>`;
                  
            content.innerHTML += box;

            $(".jd-container").html(content);

            y++;
        }
    })

    $("#bg").on('click', function(){

        $(".jd-container").html("");
        content.innerHTML = "";
        $(".jd-title").html('Galeria de Fundos');

        var listModelsCouple = modelos.filter(modelo => modelo.type == 'background');
        var j = 0;

        while(j < listModelsCouple.length){

            pc_img = listModelsCouple[j].img;

            box = `<div class="jd-box-img">\
                        <img src="${pc_img}">\
                        <a href="${pc_img}" target="_blank"><i class="bx bx-zoom-in"></i></a>\
                    </div>`;

            content.innerHTML += box;

            $(".jd-container").html(content);

            j++;
        }
    })
    
    /*############## ACTION ##########*/

    $(".jd-btn-menu").on('click', function(){

        $(".jd-bar").toggleClass("active")

        $(".jd-aside").toggleClass("hide")

        $(".jd-content").toggleClass("active")
    })
})();