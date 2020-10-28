const { fast_expt } = require("./1.2.4")

const { fixed_point } = require("./1.3.3")
function deriv(gx) {
    const dx = 0.00000001
    function dg(x) {
        return (gx(x + dx) - gx(x)) / dx
    }
    return dg
}

//console.log(deriv(x => x * x * x)(500))

function newton_transform(g) {
    return x => x - g(x) / deriv(g)(x)
}
function newton_method(g, guess) {
    return fixed_point(newton_transform(g), guess)
}

//console.log(newton_method(y => cube(y) - 27, 1))
function cube(x) {
    return x * x * x
}

function cubic(a, b, c) {
    return x => cube(x) + a * x * x + b * x + c
}
console.log(newton_method(cubic(0, 0, 1), 1))

function double(func) {
    return x => func(func(x))
}
//console.log(triple(triple(triple(triple)))(a => a + 1)(0))

function compose(f, g) {
    return x => f(g(x))
}

//console.log(triple(compose(x => x * x, x => x + 1))(6))

/* function repeated(f, n) {
    console.log(n)
    if (n === 1) {
        return f
    } else {
        return compose(f, repeated(f, n - 1))
    }
} */

function counter(n) {
    return n + 1
}

let count = 1

function repeated(f, n) {
    count = counter(count)
    //console.log(count)
    if (n === 1) {
        return f
    } else {
        if (n % 2 === 0) {
            const repeat = repeated(f, (1 / 2) * n)
            return compose(repeat, repeat)
        } else {
            return compose(f, repeated(f, n - 1))
        }
    }
}

//console.log(repeated(x => Math.sin(x), 2000000)(1))

function average(x, y, z) {
    return (x + y + z) / 3
}

function smooth(f, dx) {
    return x => average(f(x - dx), f(x), f(x + dx))
}

//console.log(repeated(smooth(x => 2 * x, 5), 5)(1))



function n_root(n, times, value) {
    const average_damp = x => 1 / 2 * (value / x ** (n - 1) + x);

    return fixed_point(repeated(average_damp, times), 1)
}

//console.log(n_root(4, 10000, 16))
//times cannot be odd

function iterative_improve(good_enough, improve_guess) {
    return guess => good_enough(guess) ?
                guess
                : iterative_improve(good_enough, improve_guess)(improve_guess(guess))
}
function sqrt_new(n) {
    function good_enough(x) {
        const tolerance = 0.000001
        return Math.abs(n - x ** 2) <= tolerance
    }
    function improve_guess(x) {
        return average2(x, n / x)
    }
    return iterative_improve(good_enough, improve_guess)(1)
}

//console.log(sqrt_new(4))

function average2(x, y) {
    return (x + y) / 2
}