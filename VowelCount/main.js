
const vowels = ['a', 'e', 'i', 'o', 'u'];

function VowelCount(str) {

    if (typeof str !== 'string') return 0

    let count = 0;
    str.split('').map(letter => vowels.indexOf(letter) !== -1 ? count += 1 : "")

    return count

}

module.exports = VowelCount