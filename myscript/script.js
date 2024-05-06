
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

