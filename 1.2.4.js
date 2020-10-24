function expt(b, n) {
    if (n === 0) {
        return 1
    } else {
        return b * expt(b, n - 1)
    }
}
//console.log(expt(4, 3))

function expt2(b, n) {
    if (n >= 0) {
        return expt2_iter(b, n, 1)
    } else {
        return 1 / (expt2_iter(b, -n, 1))
    }
}

function expt2_iter(b, counter, product) {
    if (counter === 0) {
        return product
    } else {
        return expt2_iter(b, counter - 1, product * b)
    }
}
//console.log(expt2(2, -4))

function fast_expt(b, n) {
    if (n === 0) {
        return 1
    } else {
        if (even(n)) {
            return square(fast_expt(b, n / 2))
        } else {
            return b * fast_expt(b, n - 1)
        }
    }
}
const square = x => x * x

function even(n) {
    return n % 2 === 0
}
//console.log(fast_expt(1, 2))

function even_faster_expt(b, n) {
    return even_faster_expt_iter(b, n, 1)
}

function even_faster_expt_iter(b, counter, product) {
    if (counter === 0) {
        return product
    } else {
        if (even(counter)) {
            return even_faster_expt_iter(square(b), counter / 2, product)
        } else {
            return even_faster_expt_iter(b, counter - 1, product * b)
        }
    }
}
//console.log(even_faster_expt(5, 2))

function times(a, b) {
    if (b === 0) {
        return 0
    } else {
        return a + times(a, b - 1)
    }
}
//console.log(times(1, 0))

function times_log(a, b) {
    if (b === 0) {
        return 0
    } else {
        if (even(b)) {
            return double(times_log(a, b / 2))
        } else {
            return a + times_log(a, b - 1)
        }
    }
}

function times_log2(a, b) {
    return times_log2_iter(a, b, 0)
}

function times_log2_iter(a, counter, sum) {
    if (counter === 0) {
        return sum
    } else {
        if (even(counter)) {
            return times_log2_iter(double(a), counter / 2, sum)
        } else {
            return times_log2_iter(a, counter - 1, sum + a)
        }
    }
}
//console.log(times_log2(85, 85))


function double(x) {
    return 2 * x
}
//console.log(times_log(1, 0)) 

function fib(n) {
    return fib_iter(1, 0, 0, 1, n)
}

function fib_iter(a, b, p, q, count) {
    if (count === 0) {
        return b
    } else {
        if (even(count)) {
            return fib_iter(a, b, p * p + q * q, q * q + 2 * p * q, count / 2)
        } else {
            return fib_iter(b * q + a * q + a * p, b * p + a * q, p, q, count - 1)
        }
    }
}
//console.log(fib(89435))

module.exports = {
    even_faster_expt, fast_expt
}