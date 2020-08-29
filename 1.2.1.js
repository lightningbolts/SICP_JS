function factorial(n) {
    print_star(n, "#");
    if (n === 1) {
        return n
    } else {
        factorial_n = n * factorial(n-1);
        return factorial_n
    }   
}

function print_star(n, c) {
    s = "";
    for (i = 1; i <= n; i++) {
        s += c;
    }
    console.log(s)
}
console.log(factorial(10))
///print_star(50)

function plus_recursive(a, b) {
    if (a === 0) {
        return b;
    } else {
        return inc(plus_recursive(dec(a), b))
    }
}
function plus_iterative(a, b) {
    if (a === 0) {
        return b
    } else {
        return plus_iterative(dec(a), inc(b))
    }
}
function inc(c) {
    return c + 1
}
function dec(d) {
    return d - 1
}
console.log(plus_recursive(4, 5))
console.log(plus_iterative(4, 5))
