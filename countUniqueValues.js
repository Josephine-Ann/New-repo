function countUniqueValues(arr) {
    let right = (arr.length) - 1
    let left = 0
    let counter = 0
    let vrdc = "f"
    while (arr[left] !== arr[right]) {
        if (arr[left] !== arr[right] && vrdc !== arr[right]) {
            vrdc = arr[right]
            counter++
            right--
        } else if (vrdc === arr[right]) {
            right--
        }
    }
    if (arr.length > 0) {
        counter++
    }
    return counter
}

countUniqueValues([1, 1, 1, 1, 1, 2]) // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2, -1, -1, 0, 1]) // 4