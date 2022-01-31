var tabela = document.querySelector("table")

console.log(tabela)

tabela.addEventListener("dblclick", function(event){

          /*console.log("Fui cliecado duas vezes!")   
          var alvoEvento = event.target;
          var paiDoAlvo = alvoEvento.parentNode;
          paiDoAlvo.remove();*/
        event.target.parentNode.classList.add("fadeOut");

        setTimeout(function(){
            event.target.parentNode.remove();
        } , 500)        
})





