function areThereDuplicates(arr) {
    let i = 0
    let j = arguments.length - 1
    let duplicates = false;
    if (arguments[i] === arguments[j] && arguments.length > 1) duplicates = true
    while (arguments[i] !== arguments[j] && i !== arguments.length - 1) {
        if (arguments[i] !== arguments[j] && j !== (i + 1)) {
            j--
        } else if (j === (i + 1) && arguments[i] !== arguments[j]) {
            i++
            j = arguments.length - 1
        }
        if (arguments[i] === arguments[j] && i !== j) duplicates = true
    }
    return duplicates
}

areThereDuplicates(1, 2, 3)
areThereDuplicates(1, 2, 2)
areThereDuplicates('a', 'b', 'c', 'a')

