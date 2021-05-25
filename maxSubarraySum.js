function maxSubarraySum(arr, quanItems) {
    let j = 0
    let i = 0
    let sum = 0
    let oldSum = 0
    if (quanItems > arr.length) return null
    while (j !== arr.length) {
        if (j <= (quanItems - 1)) {
            sum += arr[j]
            j++
        } else if (j > (quanItems - 1)) {
            sum -= arr[i]
            sum += arr[j]
            i++
            j++
        }
        if (sum > oldSum) oldSum = sum
    }
    return oldSum
}

maxSubarraySum([100, 200, 300, 400], 2) // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
