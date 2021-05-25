function sameFrequency(num1, num2) {
    num1 = num1.toString().split('')
    num2 = num2.toString().split('')
    const fCounterOne = {}
    const fCounterTwo = {}
    let result;
    num1.forEach(element => {
        fCounterOne[element] ? fCounterOne[element]++ : fCounterOne[element] = 1
    });
    num2.forEach(element => {
        fCounterTwo[element] ? fCounterTwo[element]++ : fCounterTwo[element] = 1
    });
    num1.forEach(element => {
        if (!fCounterTwo[element]) {
            result = true
        }
        if (fCounterTwo[element] !== fCounterOne[element]) {
            result = true
        }
    });
    if (!result) {
        return true;
    } else {
        return false;
    }
}

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false