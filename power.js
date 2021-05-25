function power(a, b) {
    let i;
    b !== 0 ? i = a : i = 1;
    b -= 1
    function multi(a, b) {
        if (b > 0) {
            i *= a
            b -= 1
            multi(a, b)
        }
    }

    multi(a, b)
    return i
}