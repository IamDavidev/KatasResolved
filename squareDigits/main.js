function squareDigits(num) {

    return Number(num.toString().split('').map((num) => {
        return Math.pow(num, 2)
    }).join(''))
}

module.exports = squareDigits

// explicacion

/*
 function squareDigits(num) { // 9119
      
     - lo convertimos a string
    * const numStr = num.toString()
     ='9119'

     - lo sepramos en un array 
    * const numStrArr = numStr.split('')
     = [ '9', '1', '1', '9' ]
    
    -  recoremos el array y cada elemeto lo elevamos al cuadrado
    * const numStrArrPow = numStrArr.map(num => {
     *   return Math.pow(num, 2)
    *}) 
     =  ['81', '1', '1', '81']

    - convertimos el array a string
    * const numStrArrPowStr = numStrArrPow.join('')
     '811181'
     - convertimos el string a numero
     * const numStrArrPowStrNum = Number(numStrArrPowStr)

    * return numStrArrPowStrNum
}
*/