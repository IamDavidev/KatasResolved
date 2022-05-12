

function UniqKey(arr) {
    arr.sort((a, b) => a - b)
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}


console.log(
    ArrValue([2, 2, 2, 2, 3, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 8, 3, 3, 8, 8, 8, 9, 9, 1])
)

