function averagePair(arr, av) {
    let i = 0
    let j = 1
    if (arr.length < 2) return false
    while (((arr[j] + arr[i]) / 2) !== av && j !== arr.length) {
        if (((arr[j] + arr[i]) / 2) < av) {
            i++
            j++
        } else if (((arr[j] + arr[i]) / 2) > av) {
            i--
        } else if (i === 0 && j !== 1) {
            j++
            i = j - 1
        }
        if (((arr[j] + arr[i]) / 2 === av)) return true
    }
    return false
}

averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
averagePair([], 4) // false