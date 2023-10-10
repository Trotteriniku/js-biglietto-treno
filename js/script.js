let kilometri =parseInt(prompt("Quanti chilometri intendi percorrere?"));
let eta =  parseInt(prompt("Quale è la tua età?"));
const prezzoKM = 0.21;
let prezzoTot = ( kilometri * prezzoKM);
let prezzoScon = document.getElementById('testo');

if(isNaN(kilometri) || isNaN(eta)){
    prezzoScon.innerHTML = 'devi inserire dei numeri';
    window.location.reload();
}

if (eta <= 17) {
    prezzoTot = prezzoTot -(prezzoTot * 20 / 100);
    prezzoScon.innerHTML=`
        il costo del tuo biglietto è ${prezzoTot.toFixed(2)};
    
    `  
    console.log(prezzoTot);
    
} else if (eta >= 65){
    prezzoTot =  prezzoTot -(prezzoTot * 40 / 100);
    prezzoScon.innerHTML=`
        il costo del tuo biglietto è ${''} ${prezzoTot.toFixed(2)}
    
    `  
    console.log(prezzoTot);
} else{
    prezzoScon.innerHTML=`
        il costo del tuo biglietto è ${''} ${prezzoTot.toFixed(2)}
    
    ` 
}