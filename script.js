class player{
    constructor(){
    var heightMain = document.getElementById("player");
    heightMain.style.height = screen.height + "px";
    if(screen.width<620){
        heightMain.style.width = screen.width + "px";
    }
    var heightDiv = document.getElementById("con");
    heightDiv.style.height = screen.height-250 + "px"; 
}
}
onload = new player();

// class btns
class audioP{
    constructor(){
        this.audioFile = document.getElementById("audioFile");
        this.radioTitre = document.getElementById("radioTitre");
        this.play_Btn = document.getElementById("playBtn");
        this.logo = document.getElementById("logo");
        

        this.isPlayed
        this.play_Btn.addEventListener("click", ()=>{
            this.play_pause();

        });

        this.radioNom =[];
        this.radioNom [0]="Saida fM";
        this.radioNom [1]="Mgharba Maroc";
        this.radioNom [2]="Pop/Rock Maroc ";
        this.radioNom [3]="Rock Maroc";
        this.radioNom [4]="R&B Maroc"; 
        this.radioNom [5]="Jazz"; 
        this.radioNom [6]="Jazz&Soul"; 
        this.radioNom [7]="Génerations Funk";
        this.radioNom [8]="Génerations Rap Fr"; 
        this.radioNom [9]="Génerations Rap US"; 
        this.radioNom [10]="Génerations Fm"; 
        this.radioNom [11]="Génerations Hype"; 
        this.radioNom [12]="Génerations Reggae";
        this.radioNom [13]="Skyrock";  

        this.radioPic=[];
        this.radioPic [0]="saida.jpg"
        this.radioPic [1]="mgh.png";
        this.radioPic [2]="pprckm.jpg"
        this.radioPic [3]="rckmm.jpg"
        this.radioPic [4]="rbm.jpg"
        this.radioPic [5]="jazz.jpg"
        this.radioPic [6]="jazz.png"
        this.radioPic [7]="funk.jpg"
        this.radioPic [8]="fr.jpg"
        this.radioPic [9]="us.png"
        this.radioPic [10]="gene.jpg"
        this.radioPic [11]="hype.png";
        this.radioPic [12]="regg.png";
        this.radioPic [13]="sky.png";
        
        this.radioSrc = [];
        this.radioSrc [0] = "https://saida.ice.infomaniak.ch/20.aac";
        this.radioSrc [1] = "http://mgharba.ice.infomaniak.ch/mgharba-128.mp3";
        this.radioSrc [2] ="http://poprock.ice.infomaniak.ch/poprock-128.mp3";
        this.radioSrc [3] ="http://rockmetal.ice.infomaniak.ch/rockmetal-128.mp3";
        this.radioSrc [4] ="http://rnb.ice.infomaniak.ch/rnb-128.mp3";
        this.radioSrc [5] ="https://jazzradio.ice.infomaniak.ch/jazzradio-high.mp3";
        this.radioSrc [6] ="https://jazz-wr10.ice.infomaniak.ch/jazz-wr10-128.mp3";
        this.radioSrc [7] ="https://gene-wr05.ice.infomaniak.ch/gene-wr05.mp3";
        this.radioSrc [8] ="https://generationfm-rap.ice.infomaniak.ch/generationfm-rap-high.mp3";
        this.radioSrc [9] ="https://generationfm-underground.ice.infomaniak.ch/generationfm-underground-high.mp3";
        this.radioSrc [10] ="https://generationfm.ice.infomaniak.ch/generationfm-high.mp3";
        this.radioSrc [11] ="https://generations-wr002.ice.infomaniak.ch/generations-wr002.mp3";
        this.radioSrc [12] ="https://generations-caraibes.ice.infomaniak.ch/generations-caraibes-high.mp3";
        this.radioSrc [13] ="http://icecast.skyrock.net/s/natio_mp3_128k?tvr_name=tunein16&tvr_section1=128mp3";

        this.server = 0;
        this.setsrc();
        document.getElementById("nextBtn").addEventListener("click",()=>{
            if(this.server<this.radioSrc.length-1){
                ++this.server;
                this.isPlayed = false;
            }else{
                this.server=0;
            }
            // pour rester sur le meme radio
            localStorage.setItem("sauvegarder",this.server);
            this.setsrc();
        });

        document.getElementById("backBtn").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                this.isPlayed = false;
            }else{
                this.server=this.radioSrc.length-1;
            }
            localStorage.setItem("sauvegarder",this.server);
            this.setsrc();
        });
    }

        setsrc(){
            if(localStorage.getItem("sauvegarder")!=null){
                this.server = localStorage.getItem("sauvegarder");
            }
            this.audioFile.src =  this.radioSrc[this.server];
            this.radioTitre.innerHTML = this.radioNom[this.server];
            this.logo.src = this.radioPic[this.server];
            this.play_pause();
        }

    play_pause(){
        if(this.isPlayed == false){
            this.play_Btn.src = "pause.png";
            this.audioFile.play();
            this.isPlayed = true;
        }else{
            this.play_Btn.src = "play.png";
            this.audioFile.pause();
            this.isPlayed = false;
        }
    }
}
onload = new audioP();