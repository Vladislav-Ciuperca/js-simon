
const risposta = document.getElementById("risposta")

// creo una funzione che genera un numero random
function getRandomNumber(from, to) {
    const randomNum = Math.floor(Math.random() * to) + from
    return randomNum
}
// creo una funzuione che genera un array di numeir random unici
function getNumberArray(min, max, range) {
    const numberList = []
    while (numberList.length < range) {
        const newNum = getRandomNumber(min, max)

        if (!numberList.includes(newNum)) {
            numberList.push(newNum)
        }
    }
    return numberList
}


// richiamo un div dopve stampero i  numeri generati
const numContainer = document.getElementById("numeri")


const aiNumeri = []
// richiamo la funzione per genezare i numeri random
function genera() {
    aiNumeri.length = 0
    const listaNumeri = getNumberArray(1, 9, 5)
    // console.log(listaNumeri)
    numContainer.innerHTML = listaNumeri
    aiNumeri.push(listaNumeri)
    console.log(aiNumeri)
    risposta.innerHTML = ""

}

setInterval(function () {
    numContainer.innerHTML = ""
}, 4000)

// richiamo con un const l'imput dell utente
const myNumbers = document.querySelectorAll(".guess")


// creo un array dove mettero i numeri inseriti dall utente
const mieiNumeri = []
// quado clicco su controlla...
function controlla() {
    // ciclo che legge i numeri inseriti dall utente
    for (let i = 0; i < myNumbers.length; i++) {
        const myNumero = myNumbers[i];
        mieiNumeri.push(parseInt(myNumero.value))
        // ciclo che legge i numeri gemerati dal computer
        for (let z = 0; z < aiNumeri.length; z++) {
            const aiNumero = aiNumeri[z];
            console.log(aiNumero)
            if (aiNumeri[z].includes(mieiNumeri[i])) {
                console.log("ok")
                risposta.innerHTML = "oke"
            }
            else {
                console.log("no")
                risposta.innerHTML = "nope"
            }

        }



    }
    console.log(mieiNumeri)

}