// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, val) {
    if (arr.length === 1) return str[0];
    return val(arr[0]) || val(arr[arr.length - 1])
    // add whatever parameters you deem necessary - good luck!
}