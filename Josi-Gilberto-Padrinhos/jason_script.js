(function(){

    var sound = {
        btn: document.querySelector(".controll"),
        icon: document.querySelector("#sound"),
        isPlaying: false,
        src: 'ana_vilela.mp3',
        audio: new Audio(),

        init(){

            this.audio.src = this.src;
            this.audio.autoplay = true;

            this.btn.onclick  = () => this.onPlayPause();
        },
        play(){
            this.isPlaying = true;
            this.audio.play();
            this.icon.classList.remove("fa-volume-down");
            this.icon.classList.add("fa-volume-up");
        },
        pause(){
            this.isPlaying = false;
            this.audio.pause();
            this.icon.classList.remove("fa-volume-up");
            this.icon.classList.add("fa-volume-down");
        },
        onPlayPause(){

            if(this.isPlaying){
                this.pause();
            }
            else{
                this.play();
            }
        }
    }

    sound.init();
})();