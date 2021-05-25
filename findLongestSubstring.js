function findLongestSubstring(str) {
    let i = 0
    let container = {}
    let newString = ''
    let longest = 0
    let newLength = 0
    if (!str) return 0
    while (i !== str.length + 1) {
        if (newString) newLength = newString.length
        if (longest < newLength) longest = newLength
        if (container[str[i]] === undefined) {
            newString = newString.concat(str[i])
            container[str[i]] = i
        } else if (container[str[i]] && newLength > 1) {
            if (longest < newLength) longest = (newString.length)
            newString = str[(container[str[i]] + 1)]
            container = { [newString]: (container[str[i]] + 1) }
            i = container[newString]
        }
        i++
    }
    return longest
}

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6