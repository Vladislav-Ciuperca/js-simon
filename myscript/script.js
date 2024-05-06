

function getRandomNumber(from, to) {
    const randomNum = Math.floor(Math.random() * to) + from
    return randomNum
}

function getNumberArray(min, max, range) {
    const numberList[]
    while (numberList.length < range) {
        const newNum = getRandomNumber(min, max)
    }

    if (!numberList.includes(newNum)) {
        numberList.push(newNum)
    }
    return numberList
}
