function minSubArrayLen(arr, positiveInteger) {
    let i = 0
    let j = 1
    let sum = arr[i] + arr[j]
    let finalQuantity = 2
    let quantity = 2
    while (j !== arr.length) {
        if (sum < positiveInteger) {
            j++
            sum += arr[j]
            quantity++
            finalQuantity++
        }
        if (sum >= positiveInteger && (sum - arr[i]) < positiveInteger) {
            j++
            sum += arr[j]
            quantity++
        }
        if (sum >= positiveInteger && (sum - arr[i]) >= positiveInteger) {
            sum -= arr[i]
            i++
            quantity--
        }
        if (j === (arr.length - 1) && sum < positiveInteger) {
            finalQuantity = 0
            j = arr.length
        }
        if (quantity < finalQuantity && sum >= positiveInteger) finalQuantity = quantity
    }
    return finalQuantity
}

minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2
minSubArrayLen([2, 1, 6, 5, 4], 9) // 2
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
