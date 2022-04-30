const JadenCasing = require('./jadenCasing/main.js')
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

test('jaden casing str', () => {
    expect(JadenCasing('How can mirrors be real if our eyes arent real')).toBe('How Can Mirrors Be Real If Our Eyes Arent Real')
    expect(JadenCasing("It's a beautiful day in the neighborhood")).toBe("It's A Beautiful Day In The Neighborhood")
})