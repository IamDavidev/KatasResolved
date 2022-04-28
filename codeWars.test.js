const NarcissticNumber = require('./NarcissticNumber/main.js')
const squareDigits = require('./squareDigits/main.js')

test('narcisstic number ', () => {
    const result = NarcissticNumber(153)
    expect(result).toBe(true)
    expect(NarcissticNumber(23)).toBe(false)
    expect(NarcissticNumber(640)).toBe(false)
    expect(NarcissticNumber(18)).toBe(false)
    expect(NarcissticNumber(154)).toBe(false)
})



test('square digits ', () => {
    expect(squareDigits(2112)).toBe(4114)
    expect(squareDigits(9119)).toBe(811181)
})