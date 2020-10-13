

const { sqrt } = require("./1.1.8")
const { even_faster_expt } = require("./1.2.4")

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

//console.log(naive_prime(37))

function smallest_divisor(n) {
    return find_divisor(n, 2)
}
function square(x) {
    return x * x
}
function find_divisor(n, test_divisor) {
    //console.log("A Dirty Way to Cheat")
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

//console.log(is_prime(9))

function even(x) {
    return x % 2 === 0
}

function square(x) {
    return x ** 2
}

function expmod(base, expt, m) {
    if (expt === 0) {
        return 1
    } else {
        if (even(expt)) {
            return square(expmod(base, expt / 2, m)) % m
        } else {
            return base * expmod(base, expt - 1, m) % m
        }
    }
}
/* function expmod(base, expt, m) {
    return even_faster_expt(base, expt) % m
} */

function fermat_test(n) {
    const a_1 = Math.floor(Math.random(n-1))
    function try_it(a) {
        return expmod(a, n, n) === a;
    }
    return try_it(1 + a_1)
}

function carmichael_test(n) {
    let a = 2
    while (a < n) {
        if (expmod(a, n, n) === a) {
            a = a + 1
        } else {
            return "Not Prime."
        }
    }
    if (naive_prime(n)) {
        return "Prime Number."
    } else {
        return "Carmichael Number!"
    }
}

function fast_is_prime(n, times) {
    if (times === 0) {
        return true
    } else {
        if (fermat_test(n)) {
            return fast_is_prime(n, times - 1) 
        } else {
            return false
        }
    }
}

//console.log(fast_is_prime(561, 10000))
//console.log(smallest_divisor(19999))

function timed_prime_test(n) {
    return start_prime_test(n, get_time())
}
function start_prime_test(n, start_time) {
    if (fast_is_prime(n, Math.floor(Math.log(n)))) {
        report_prime(get_time() - start_time)
        display(n)
    } else {
        return true
    }
}
function report_prime(elapsed_time) {
    display(" *** ")
    display(elapsed_time)
}

function display(n) {
    console.log(n)
}

function get_time() {
    return new Date().getTime()
}

//console.log(timed_prime_test(1999))
/*
function search_for_primes(start, times) {
    if (times === 0) {
        return true
    } else {
        if (start > 2 && start % 2 === 0) {
            search_for_primes(start + 1, times)
        } else {
            if (is_undefined(timed_prime_test(start))) {
                return search_for_primes(start + 2, times - 1)
            } else {
                search_for_primes(start + 2, times)
            }
        }
    }
}
*/
function search_for_primes(start, times) {
    return times === 0
        ? true
        : start > 2 && start % 2 === 0
            ? search_for_primes(start + 1, times)
            // if we get undefined -> its a prime
            : is_undefined(timed_prime_test(start)) 
                ? search_for_primes(start + 2, times - 1)
                : search_for_primes(start + 2, times);
}

function is_undefined(x) {
    return x === undefined
}

//console.log(search_for_primes(1000000, 3))
//console.log(carmichael_test(561))

module.exports = {fast_is_prime}