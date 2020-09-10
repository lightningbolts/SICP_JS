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
        return 1/(expt2_iter(b, -n, 1))
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
            return square(fast_expt(b, n/2))
        } else {
            return b * fast_expt(b, n - 1)
        }
    }
}
const square = x => x * x

function even(n) {
    return n % 2 === 0
} 
console.log(fast_expt(1, 2))