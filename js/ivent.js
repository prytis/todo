"use strict"
// 1. stebeti dominanti elementa
// 2. inicioti ivykio stebejima
// 3. nurodyti ka 

const pirmas = document.querySelector('.btn.pirmas')
const antras = document.querySelector('.btn.antras')

pirmas.addEventListener('click',pirmasVeiksmas)
antras.addEventListener('click',antrasVeiksmas)


let kartai = 0;
function pirmasVeiksmas() {
    kartai++;
    return console.log(`paspaustas pirmas ${kartai}`)
}

let kartai2 = 0;
function antrasVeiksmas() {
    kartai2++;
    return console.log(`paspaustas Antras ${kartai2}`)
}

