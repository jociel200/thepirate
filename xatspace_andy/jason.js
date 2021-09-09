(function(){

    $(".jd-btn-open").each(function(){

        $(this).on('click', function(){

            var page = $(this).attr("data-page");
            $(".jd-modal").addClass("show");

            switch(page){

                case 'friend':
                    setTimeout(function(){

                            $(".friend").animate({
                                "top":"50%",
                                "opacity":"1",
                                "z-index":"1000"
                            }, 300)
                    }, 500);
                break;

                case 'video':

                    setTimeout(function(){

                        $(".video").animate({
                            "top":"50%",
                            "opacity":"1",
                            "z-index":"1000"
                        }, 300)
                }, 500);
                break;
            }

        })
    })

    $(".jd-btn-close").each(function(){

        $(this).on('click', function(){

            var page = $(this).attr("data-page");

            switch(page){

                case 'friend':

                    $(".friend").animate({
                        "top":"40%"
                    },{
                        duration: 400,
                        complete: function(){
                            $(".friend").animate({
                                "top":"55%",
                                "opacity":"0",
                                "z-index":"1"
                            }, {
                                duration: 500,
                                complete: function(){
                                    setTimeout(function(){

                                        $(".jd-modal").removeClass("show")
                                    }, 300)  
                                }
                            })
                        }
                    })
                break;

                case 'video':

                    $(".video").animate({
                        "top":"40%"
                    },{
                        duration: 400,
                        complete: function(){
                            $(".video").animate({
                                "top":"55%",
                                "opacity":"0",
                                "z-index":"1"
                            }, {
                                duration: 500,
                                complete: function(){
                                    setTimeout(function(){

                                        $(".jd-modal").removeClass("show")
                                    }, 300)  
                                }
                            })
                        }
                    })
                break;
            }
        })
    })



    var friend = [
        {
            name: "Mana",
            link: "https://xat.me/ELoh"
        },
        {
            name: "Tia",
            link: "https://xat.me/sinistra16"
        },
        {
            name: "Paula",
            link: "https://xat.me/anapauIa"
        },
        {
            name: "Sun",
            link: "https://xat.me/YouAreMySun"
        },
        {
            name: "Morgana",
            link: "https://xat.me/Morgan"
        },
        {
            name: "Miguel",
            link: "https://xat.me/especiaL1sa"
        },
        {
            name: "Nanda",
            link: "https://xat.me/xLaka"
        },
        {
            name: "Ryan",
            link: "https://xat.me/xR0bertt"
        },
        {
            name: "Thiago",
            link: "https://xat.me/iThiago000"
        },
        {
            name: "Dimi",
            link: "https://xat.me/Dimittrius"
        },
    ]

    var container = document.querySelector(".jd-col-friend");
    var i = 0;
    var box = '';

    while(i < friend.length){

        box = '<li>'+
                    '<i class="fas fa-user-circle"></i>'+
                    '<div class="jd-data-user">'+
                        '<span>'+friend[i].name+'</span>'+
                        '<p></p>'+
                    '</div>'+
                    '<a href="'+friend[i].link+'">xat.me</a>'+
                '</li>';

        container.innerHTML += box;

        i++;
    }

})();
