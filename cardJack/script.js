window.onload = () => {latagan(), karambola(), umpisaLaro()}                                            // I made up my own object names in my native tongue and just to be unique. referenced in the readMe.

let tago; 
let tumpok; 
let patok = true;  
let sumaTangero = 0; 
let akingBilang = 0;  
let unangBilang = 0; 
let baraha = 0;  

let latagan = () => { 
    tumpok = [];
    let uri = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];                       // card assets taken from https://github.com/ImKennyYip/black-jack/tree/master/cards
    let kahulugan = ["C", "D", "H", "S"]; 
    for (let i = 0; i < kahulugan.length; i++) {    
        for (let x = 0; x < uri.length; x++) {   
            tumpok.push(uri[x] + "-" + kahulugan[i]); 
        }
    }
     console.log(tumpok); 
}

let karambola = () => { 
    for (let i = 0; i < tumpok.length; i++) {                                                           // the idea of using for loops was discussed in class and is applied here, but for me to round of numbers with 'Math.floor', I referred to in scrimba. https://www.youtube.com/watch?v=jS4aFq5-91M
        let x = Math.floor(Math.random() * tumpok.length); 
        let epal = tumpok[i]; 
        tumpok[i] = tumpok[x]; 
        tumpok[x] = epal; 
    }
    console.log(tumpok);  
}

let umpisaLaro = () => {                                                                                // I would use and arrow function rather than the usual function as I find it more unique.
    tago = tumpok.pop(); 
    sumaTangero += kuhaSagot(tago); 
    unangBilang += kuhaTangero(tago); 
    while  (sumaTangero < 17) {  
        let tumpokPik = document.createElement("img"); 
        let papel = tumpok.pop();                          
        tumpokPik.src = "./assets/" + papel + ".png";       
     sumaTangero += kuhaSagot(papel);                
        unangBilang += kuhaTangero(papel);                 
        document.getElementById("tangero").append(tumpokPik);     
    }
    console.log (sumaTangero);     

    for (let i = 0; i < 2; i++) {
        let tumpokPik = document.createElement("img"); 
        let papel = tumpok.pop();                          
        tumpokPik.src = "./assets/" + papel + ".png";       
        akingBilang += kuhaSagot(papel);                      
        baraha += kuhaTangero(papel);                 
        document.getElementById("etoNa").append(tumpokPik);
    }
    console.log(akingBilang);                                               
    document.getElementById("umpisa").addEventListener("click", palo);      
    document.getElementById("kuha").addEventListener("click", pirme);    
}
    
let kuhaSagot = (papel) => {
    let halaga = papel.split("-")[0];
    return isNaN(halaga) ? (halaga == "A" ? 11 : 10) : parseInt(halaga);
    };
  


let kuhaTangero = (papel) => {       
    if (papel[0] == "A") {       
        return 1;
    }
    return 0;
}

let bawasTungga = (damiMo, damiNya) => {         
    while (damiMo > 21 && damiNya > 0) {      
        damiMo -= 10;                                
        damiNya -= 1;                           
    }
    return damiMo;                                   
}

let palo = () => {        
    if (patok) {      
        return;
    }
let tumpokPik = document.createElement("img");        
    let papel = tumpok.pop();                              
    tumpokPik.src = "./assets/" + papel + ".png";           
    akingBilang += kuhaSagot(papel);                          
    baraha += kuhaTangero(papel);                     
    document.getElementById("etoNa").append(tumpokPik);

    if (bawasTungga(akingBilang, baraha) > 21) {            
     patok = false;                                     
    }
}

let pirme = () => {                                                       
        sumaTangero -= unangBilang;
        akingBilang -= baraha;
        patok = false;
        document.getElementById("tagoMo").src = "./assets/" + tago + ".png";
        let mensahe = akingBilang > 21 ? "Better luck next time, Partner!" : sumaTangero > 21 ? "You Win! Congratulations." :               //this refactoring of if/else was taught in this class and this type, Sam refers to as 'pulling all the tricks.'
            akingBilang === sumaTangero ? "You are Even" : 
                akingBilang > sumaTangero ? "You Win! Congratulations" : "Better luck next time, Stranger";
        
        document.getElementById("sumaTangeroTutal").innerText = sumaTangero;    
        document.getElementById("barahaKo").innerText = akingBilang;        
        document.getElementById("sugarol").innerText = mensahe;         
    }

    document.getElementById("kuha").addEventListener("click", function() {                                                              //adding audio I referred to https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click and just went on from there.
    document.getElementById("tunog1").play();
    });
    document.getElementById("umpisa").addEventListener("click", function() {
    document.getElementById("tunog2").play();
    })

    function refreshPage() {
        location.reload();
      }