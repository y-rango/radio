class volume{
    constructor(){
        this.audioFile = document.getElementById("audioFile");
        this.audioFile.volume = 50/100;

        this.volumeRan = document.getElementById("volumeRan");
        this.volumeRan.addEventListener("change",()=>{
            this.audioFile.volume = this.volumeRan.value / 100 ;
        });

        this.vite = document.getElementById("vite");
        this.vite.playbackRate = 1;
        this.vite.addEventListener("change",()=>{
            this.audioFile.playbackRate =  this.vite.value/100;
        });

    }
}
onload = new volume();