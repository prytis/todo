"use strict";

const mygtukai = document.querySelectorAll('.btn');
for (let k = 0; k<mygtukai.length;k++){
    mygtukai[k].addEventListener("click",paspaudimas);
}



let paspaudimuKiekis = Array(mygtukai.length).fill(0);

function paspaudimas ( event ) {
    const paspaustasElem = event.target;
    console.log(paspaustasElem)
    const duomenys = paspaustasElem.dataset;
    const index = Number(duomenys.number);
    paspaudimuKiekis[index]++;
    return console.log(`paspaustas ${index} paspaudimu kiekis ${paspaudimuKiekis[index]} `);
    
}