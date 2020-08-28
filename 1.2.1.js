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