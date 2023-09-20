/*numeri random*/


function random() {
    num = Math.round(Math.random() * 100);
    document.getElementById("random").innerHTML = num;
}



/*timer*/

window.onload = function() {
    let secondi = 15;
    setInterval(function() {

        if(secondi > 0){
            document.getElementById("timer").innerHTML = "Hai ancora" + secondi + "per memorizzare i numeri";
            secondi--;
            
        }else{
            document.getElementById("timer").innerHTML = "tempo scaduto";
            
            let indovina = prompt("inserisci il primo numero che hai visualizzato")
        }
    }, 1000)
}







