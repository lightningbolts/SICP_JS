//Start of Chapter 2

function make_rat(x, y) {
    return [x, y]
}

function numer(x) {
    return x[0]
}

function denom(x) {
    return x[1]
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

console.log(display_frac(equal_rat(make_rat(1, 2), make_rat(1, 2))))