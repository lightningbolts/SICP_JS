function C(x) {
    return x ** x
}

function C2(x) {
    return C(C(x))
}

function smooth(f, dx) {
    return x => average(f(x - dx), f(x), f(x + dx))
}

console.log(smooth(C2, 1)(4))

function average(x, y, z) {
    return (x + y) / 3
}