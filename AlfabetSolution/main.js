
const alfabet = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function Alfabet(word) {
    if (word === null || word === undefined || word === "") return null;

    const r = word.split('').map(letter => {

        const indexWord = alfabet.indexOf(letter.toLowerCase());

        if (indexWord === -1 || letter === ' ') return 0;

        return indexWord;

    }).filter(letter => letter !== 0).join(' ')
    return r
}


module.exports = Alfabet;
