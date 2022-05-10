function OpenSenior(data) {
    return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? "Seior" : "Open"
    )
}


OpenSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20]
])