const fib1 = n => {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1

    } else {
        return fib1(n - 1) + fib1(n - 2)
    }
}

const fib = n => {
    return fib_iter(1, 0, n)
}

const fib_iter = (a, b, count) => {
    return count === 0
        ? b
        : fib_iter(a + b, a, count - 1)
}

function count_change(amount) {
    return cc(amount, 5)
}

function cc(amount, kinds_of_coins) {
    if (amount === 0) {
        return 1
    } else if (amount < 0 || kinds_of_coins === 0) {
        return 0
    } else {
        return cc(amount, kinds_of_coins - 1) + cc(amount - first_denomination(kinds_of_coins), kinds_of_coins)
    }
}

function first_denomination(kinds_of_coins) {
    if (kinds_of_coins === 1) {
        return 1
    } else if (kinds_of_coins === 2) {
        return 5
    } else if (kinds_of_coins === 3) {
        return 10
    } else if (kinds_of_coins === 4) {
        return 25
    } else if (kinds_of_coins === 5) {
        return 50
    } else {
        return 0
    }
}

//console.log(fib1(87))
//console.log(fib(87))
console.log(count_change(100))