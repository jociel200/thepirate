/*
var zoomBtn = document.querySelector("#zoom");
var closeBtn = document.querySelector("#close");
*/
var modal = document.querySelector(".jd-modal");
var container = document.getElementById("container");
var content = document.getElementById("content");
var i = 0;
var btn;
var box = '';
var boxModal = '';

var listPlayers = players.filter(player => player.categoria === 'html');
console.log(listPlayers.length);


if(i < listPlayers.length){
    console.log("ok!");
}

var listImg = listPlayers.map(img => img.img);
var listPrice = listPlayers.map(price => price.price);
var listModel = listPlayers.map(model => model.model);
var listSize = listPlayers.map(size => size.size);
var listId = listPlayers.map(id => id.id);

while(i < listPlayers.length){
    var img = listPlayers[i].img;
    var model = listPlayers[i].model;
    var price = listPlayers[i].price;
    var size = listPlayers[i].size;
    var _id = listPlayers[i].id;

    box =   '<div class="jd-box">'+
            '<div class="jd-box-img">'+
            '<img src="'+ img +'">'+
            '</div>'+
            '<div class="jd-cod">code: '+ model +'</div>'+
            '<h2 class="jd-price">$ '+ price +' <sup>xats</sup></h2>'+
            '<button class="jd-btn-box" id="'+ _id +'">zoom</button>'+
            '<p class="jd-size">size: '+ size +'</p>'+
            '</div>';
    container.innerHTML += box;
    i++;
    //console.log(img);
}

for(var j = 0; j < container.children.length; j++){
    btn = container.children[j].querySelector(".jd-btn-box");
    btn.addEventListener('click', onBtnClick);
}

function onBtnClick(ev){
    var evn = ev.currentTarget.id;

    modalPlayer = players.filter(player => player.id == evn);
    imgModal = modalPlayer.map(img => img.img);
    priceModal = modalPlayer.map(price => price.price);
    modelModal = modalPlayer.map(model => model.model);
    sizeModal = modalPlayer.map(size => size.size);

    //console.log(evn);
    modal.classList.add("jd-show");

    boxModal =  '<div class="jd-box-modal">'+
                '<h2 class="jd-title-modal">Player html modelo '+ modelModal +'</h2>'+
                '<button class="jd-btn-close" id="close" onclick="closeModal()">x</button>'+
                '<div class="jd-player-modal">'+
                '<div class="jd-box-img-modal">'+
                '<img src="'+ imgModal +'">'+
                '</div>'+
                '<div class="jd-col-modal">'+
                '<span class="jd-code-modal">Code: <strong>'+ modelModal +'</strong></span>'+
                '<h1 class="jd-price-modal">Price: $<strong>'+ priceModal +'</strong><sup>xats</sup></h1>'+
                '<p class="jd-size-modal">Size: <strong>'+ sizeModal +'</strong></p>'+
                '</div>'+
                '</div>'+
                '</div>';

    content.innerHTML = boxModal;
};
function closeModal(){
    modal.classList.remove("jd-show");
};


//console.log(players);