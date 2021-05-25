function flatten(arr) {
    while (arr.length === 1) {
        arr = arr[0]
    }
    if (typeof arr[arr.length - 1] === 'object') {
        arr[arr.length - 2] = [].concat(arr[arr.length - 2], arr[arr.length - 1])
        arr.pop()
        flatten(arr)
    }
    while (arr.length === 1) {
        arr = arr[0]
    }
    return arr
}
// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3