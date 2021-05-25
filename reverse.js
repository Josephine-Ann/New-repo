function reverse(str) {
    let arr = str.split('')
    let left = 0
    let right = str.length - 1
    let end;
    if (arr.length % 2 === 0) {
        end = (arr.length - 2) / 2 + 1
    } else {
        end = (arr.length - 1) / 2
    }
    function swap(arr, left, right) {
        let tempLeft = arr[left]
        let tempRight = arr[right]
        if (left !== end) {
            arr[left] = tempRight
            arr[right] = tempLeft
            left++
            right--
            swap(arr, left, right)
        }
    }
    swap(arr, left, right)
    return arr.join('')
}