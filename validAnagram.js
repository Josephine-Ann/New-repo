function validAnagram(string1, string2) {
    let result;
    if (string1.length !== string2.length) {
        result = false
    }
    if (string1.length > 0) {
        string1 = string1.split('')
    } else {
        string1 = []
    }
    if (string2.length > 0) {
        string2 = string2.split('')
    } else {
        string2 = []
    }
    const arr = []
    const frequencyCounterOne = {}
    const frequencyCounterTwo = {}
    string1.forEach((element) => {
        let key = element
        frequencyCounterOne[key] ? frequencyCounterOne[key]++ : frequencyCounterOne[key] = 1
    });
    string2.forEach((element) => {
        let key = element
        frequencyCounterTwo[key] ? frequencyCounterTwo[key]++ : frequencyCounterTwo[key] = 1
    });
    if (string1.length === 0 && string2.length === 0) {
        result = true;
    }
    string1.forEach((element) => {
        if (!frequencyCounterTwo[element]) {
            result = false;
        }
        if (frequencyCounterTwo[element] !== frequencyCounterOne[element]) {
            result = false;
        } else {
            result = true;
        }
    })
    return result
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('qwerty', 'qeywrt') // true



