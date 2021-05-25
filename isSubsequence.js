function isSubsequence(str1, str2) {
    let i = 0
    let j = 0
    let charFound = 0
    while (j !== str2.length && charFound !== str1.length) {
        if (str1[i] === str2[j]) {
            i++
            j++
            charFound++
        } else if (str1[i] !== str2[j]) {
            j++
        }
    }
    return charFound === str1.length
}

isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'acb') // false