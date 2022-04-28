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

    return sum === num

}

module.exports = NarcissticNumber


