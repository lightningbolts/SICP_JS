//Exercise 2.4

function pair(x, y) {
    return m => m(x, y);
}
function head(z) {
    return z((p, q) => p);
}

function tail(z) {
    return z((p, q) => q)
}

//console.log(tail(pair(3, 2)))
//Exercise 2.5

function pair1(a, b) {
    return 2 ** a * 3 ** b
}

function get_num(x, times, num) {
    if (x % num !== 0) {
        return times
    } else {
        return get_num(x / num, times + 1)
    }
}

function head1(c) {
    return get_num(c, 0, 2)
}

function tail1(c) {
    return get_num(c, 0, 3)
}

console.log(tail1(pair1(2, 1)))