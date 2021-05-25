// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num) {
    let finalNumber = num

    function counting(num) {
        if (num > 0) {
            finalNumber += num - 1
            num -= 1
            counting(num)
        }
    }

    counting(num)

    return finalNumber
}
