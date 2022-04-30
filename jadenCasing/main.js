function JadenCasing(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}

console.log(JadenCasing('How can mirrors be real if our eyes arent real'))


module.exports = JadenCasing