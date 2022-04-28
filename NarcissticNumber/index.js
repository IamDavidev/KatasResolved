function NarcissticNumber(num) {
    let sum = 0

    if (Number.isNaN(num)) return false

    const numStr = num.toString().split('')

    numStr.map(n => {
        const nMap = Number(n)
        if (Number.isNaN(nMap)) return false
        const nMapPow = Math.pow(nMap, numStr.length)


        sum += nMapPow
    })

    if (sum === num) return console.log(`${num} is a Narcisstic Number`)

    return console.log(`${num} is not a Narcisstic Number`)

}

module.exports = NarcissticNumber


