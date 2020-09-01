const factorial = (n) => {
    print_star(n, "#");
    if (n === 1) {
        return n
    } else {
        factorial_n = n * factorial(n - 1);
        return factorial_n
    }
}

const print_star = (n, c) => {
    s = "";
    for (i = 1; i <= n; i++) {
        s += c;
    }
    console.log(s)
}
console.log(factorial(10))
///print_star(50)

const plus_recursive = (a, b) => {
    if (a === 0) {
        return b;
    } else {
        return inc(plus_recursive(dec(a), b))
    }
}
const plus_iterative = (a, b) => {
    if (a === 0) {
        return b
    } else {
        return plus_iterative(dec(a), inc(b))
    }
}
const inc = (c) => c + 1

const dec = (d) => d - 1

//console.log(plus_recursive(4, 5))
//console.log(plus_iterative(4, 5))

const A = (x, y) => {
    if (y === 0) {
        return 0
    } else if (x === 0) {
        return 2 * y
    } else if (y === 1) {
        return 2
    } else {
        A((x - 1), A(x, y - 1))
    }
}
console.log(A(5, 2))

