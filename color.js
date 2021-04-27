class Color{
    constructor(){
        this.btn1 = document.getElementById("btn1");
        this.btn1.addEventListener("click",()=>{
            this.select_color("btn1");
        });

        this.btn2 = document.getElementById("btn2");
        this.btn2.addEventListener("click",()=>{
            this.select_color("btn2");
        });

        this.btn3 = document.getElementById("btn3");
        this.btn3.addEventListener("click",()=>{
            this.select_color("btn3");
        });

        this.btn4 = document.getElementById("btn4");
        this.btn4.addEventListener("click",()=>{
            this.select_color("btn4");
        });

        this.btn5 = document.getElementById("btn5");
        this.btn5.addEventListener("click",()=>{
            this.select_color("btn5");
        });

        this.btn6 = document.getElementById("btn6");
        this.btn6.addEventListener("click",()=>{
            this.select_color("btn6");
        });
        
        if(localStorage.getItem("COLOR")==null){
            document.body.style.background = "linear-gradient(to right, #200122, #6f0000)"; 
        }
        this.select_color(localStorage.getItem("COLOR"));
    }
    select_color(color){
        if(color=="btn1"){
            document.body.style.background = "linear-gradient(to right, #200122, #6f0000)";
        }else  if(color=="btn2"){
            document.body.style.background = "linear-gradient(to right, #b92b27, #1565c0)";
        }else  if(color=="btn3"){
            document.body.style.background = "linear-gradient(to right, #ed213a, #93291e)";
        }else  if(color=="btn4"){
            document.body.style.background = "linear-gradient(to right, #232526, #414345)";
        }else  if(color=="btn5"){
            document.body.style.background = "#8fc0c3";
        }else  if(color=="btn6"){
            document.body.style.background = "#9134cb";
        }
        localStorage.setItem("COLOR",color);
    }
}
onload = new Color();
