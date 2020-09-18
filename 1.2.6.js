const { sqrt } = require("./1.1.8")

function naive_prime(n) {
    let d = 2
    while (d < sqrt(n)) {
        if (n % d === 0) {
            return false
        } else {
            d = d + 1
        }
    }
    return true
}

console.log(naive_prime(37))

function smallest_divisor(n) {
    return find_divisor(n, 2)
}
function square(x) {
    return x * x
}
function find_divisor(n, test_divisor) {
    console.log("A Dirty Way to Cheat")
    if (square(test_divisor) > n) {
        return n
    } else {
        if (divides(test_divisor, n)) {
            return test_divisor
        } else {
            return find_divisor(n, test_divisor + 1)
        }
    }
}

function divides(a, b) {
    return b % a === 0
}

function is_prime(n) {
    return n === smallest_divisor(n)
}

console.log(is_prime(9))

