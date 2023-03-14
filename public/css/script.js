function clicou(){
    let main = document.getElementById("menu-area");
    if(main.classList.contains("meno-open")==true){
       main.classList.remove("meno-open");
    }else{
       main.classList.add("meno-open")
      
    }
   }
   