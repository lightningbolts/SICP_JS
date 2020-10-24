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

//console.log(newton_method(y => cube(y) - 1000000000000, 10000))
function cube(x) {
    return x * x * x
}

function cubic(a, b, c) {
    return x => cube(x) + a * x * x + b * x + c
}
//console.log(newton_method(cubic(0, 0, -27), 1))

function triple(func) {
    return x => func(func(func(x)))
}
//console.log(triple(triple(triple(triple)))(a => a + 1)(0))

