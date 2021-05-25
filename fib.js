// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num) {
    let prevM1 = 2
    let tempPrev = 0
    let currentFib = 3
    let currentFibPosition = 4
    let final = 3
    function calc(currentFib) {
        if (currentFibPosition !== num) {
            tempPrev = prevM1
            prevM1 = currentFib
            currentFib = currentFib + tempPrev
            currentFibPosition++
            return currentFibPosition === num ? final = currentFib : calc(currentFib)
        }
    }
    calc(currentFib)
    return final
}