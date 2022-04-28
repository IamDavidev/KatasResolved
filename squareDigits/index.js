function squareDigits(num) {

    return num.toString().split('').map((num) => {
        return Math.pow(num, 2)
    }).join('')
}

module.exports = squareDigits