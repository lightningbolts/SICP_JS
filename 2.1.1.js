//Start of Chapter 2
const { gcd } = require("./1.2.5")
function pair(x, y) {
    return [x, y]
}

function head(x) {
    return x[0] 
}

function tail(x) {
    return x[1]
}

function sign(x) {
    if (x < 0) {
        return -1
    } else if (x === 0) {
        return 0
    } else {
        return 1
    }
}

function make_rat(x, y) {
    const g = gcd(x, y)
    return pair(sign(x) * sign(y) * Math.abs(x / g), Math.abs(y / g))
}

function numer(x) {
    return head(x)
}

function denom(x) {
    return tail(x)
}

function display_frac(x) {
    return `${numer(x)}/${denom(x)}`
}

function add_rat(x, y) {
    return make_rat(numer(x) * denom(y) + numer(y) * denom(x), denom(x) * denom(y))
}

function sub_rat(x, y) {
    return make_rat(numer(x) * denom(y) - numer(y) * denom(x), denom(x) * denom(y))
}

function mul_rat(x, y) {
    return make_rat(numer(x) * numer(y), denom(x) * denom(y))
}

function div_rat(x, y) {
    return make_rat(numer(x) * denom(y), denom(x), numer(y))
}

function equal_rat(x, y) {
    return numer(x) * denom(y) === numer(y) * denom(x)
}

//console.log(display_frac(add_rat(make_rat(-1, -2), make_rat(1, 2))))
//console.log(display_frac(make_rat(1, 2)))
//console.log(display_frac(make_rat(1, -3)))

//console.log(equal_rat(make_rat(1, 2), make_rat(1, 3)))

module.exports = {pair, head, tail}