(function(){

    $(".jd-item").each(function(){

        $(this).on('click', function(){

            var page = $(this).attr("data-page");

            $(".jd-home").animate({
                "left":"200%"
            }, {
                duration: 500,
                complete: function(){

                    $(".jd-home").css({"left":"-150%"});

                    switch(page){

                        case 'about':
                            $("#about").animate({
                                "top":"50%"
                            }, 500)
                        break;

                        case 'video':
                            $("#video").animate({
                                "top":"50%"
                            }, 500)
                        break;

                        case 'friend':
                            $("#friend").animate({
                                "top":"50%"
                            }, 500)
                        break;

                        case 'photo':
                            $("#photo").animate({
                                "top":"50%"
                            }, 500)
                        break;
                    }
                }
            })
        })
    })

    $(".jd-btn-close").each(function(){

        $(this).on('click', function(){

            var page = $(this).attr("data-page");

            switch(page){

                case 'about':
                    $("#about").animate({
                        "top":"-150%"
                    }, {
                        duration: 500,
                        complete: function(){

                            $("#about").css({"top":"150%"});
                            $(".jd-home").animate({
                                "left":"50%"
                            }, 500)
                        }
                    })
                break;

                case 'friend':
                    $("#friend").animate({
                        "top":"-150%"
                    }, {
                        duration: 500,
                        complete: function(){

                            $("#friend").css({"top":"150%"});
                            $(".jd-home").animate({
                                "left":"50%"
                            }, 500)
                        }
                    })
                break;

                case 'video':
                    $("#video").animate({
                        "top":"-150%"
                    }, {
                        duration: 500,
                        complete: function(){

                            $("#video").css({"top":"150%"});
                            $(".jd-home").animate({
                                "left":"50%"
                            }, 500)
                        }
                    })
                break;

                case 'photo':
                    $("#photo").animate({
                        "top":"-150%"
                    }, {
                        duration: 500,
                        complete: function(){

                            $("#photo").css({"top":"150%"});
                            $(".jd-home").animate({
                                "left":"50%"
                            }, 500)
                        }
                    })
                break;
            }
        })
    })
    
    var canvas = document.getElementById("jd__canvas");
    var ctx = canvas.getContext("2d"), 
    radius = 30, 
    maxSfere = 500,
    sfereArr = [],
    maxRadius = 50,
    mouse = {
      x: undefined,
      y: undefined
    },
    colores = [
        '#49CEF8',
        '#978D7B',
        '#F15353',
        '#FF9CBE',
        '#2C71B7',
        '#3B76B5',
        '#AB3D4B',
    ];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('mousemove', function(event){
        
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        init();
    });

    function Sfere(x, y, vx, vy, radius){
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colores[Math.floor(Math.random() * colores.length)];
        
        this.paint = function(){
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.stroke();
            ctx.fill();
        }
        this.update = function(){
            if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
                this.vx = - this.vx;
            }
            if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.vy = - this.vy;
            }
            
            this.x += this.vx;
            this.y += this.vy;
            
            if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
                
                if(this.radius < maxRadius){
                    this.radius += 1;
                }
            }else if(this.radius > this.minRadius){
                this.radius -= 1;
            }
            
            this.paint();
        }
    }

    function init(){
        sfereArr = [];
        for(var i = 0; i < maxSfere; i++){
            var radius = Math.random() * 3 + 1,
                x = Math.random() * (innerWidth - radius * 2) + radius, 
                y = Math.random() * (innerHeight - radius * 2) + radius,
                vx = (Math.random() - 0.5),
                vy = (Math.random() - 0.5);
            sfereArr.push(new Sfere(x, y, vx, vy, radius));
        }
        //animate();
    }

    function animate(){
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        
        for(var i = 0; i < sfereArr.length; i++){
            sfereArr[i].update();
        }
        
    }
    animate();
    init();



    var content = document.querySelector(".jd-col-friend");
    var a = 0;
    var box = '';

    var friend = [
        {
            name: 'Loc Edit',
            link: 'editepranger2015'
        },
        {
            name: 'Loc Lua',
            link: 'meameouodeie'
        },
        {
            name: 'Ciganinha',
            link: 'linamateus'
        },
        {
            name: 'Maria Alzira',
            link: 'mariaalzira1966'
        },
        {
            name: 'Loc Zeca',
            link: 'zejulio228888'
        }
    ];


    while(a < friend.length){

        nome = friend[a].name;
        url = friend[a].link;

        box = '<div class="jd-row">'+
                '<i class="fas fa-user-circle"></i>'+
                '<div class="jd-data-user">'+
                    '<span>'+nome+'</span>'+
                    '<p></p>'+
                    '<a href="https://xat.me/'+url+'" target="_blank"><i class="fas fa-plus"></i></a>'+
                '</div>'+
              '</div>';

        content.innerHTML += box;

        a++;
    }


})();