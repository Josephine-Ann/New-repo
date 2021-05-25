// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length > 1) {
        arr[arr.length - 2] = arr[arr.length - 2] * arr[arr.length - 1]
        arr.pop()
        productOfArray(arr)
    }
    return arr[0]
}