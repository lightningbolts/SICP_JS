function sum_integers(a, b) {
    if (a > b) {
        return 0
    } else {
        return a + sum_integers(a + 1, b)
    }
}

function sum_cubes(a, b) {
    if (a > b) {
        return 0
    } else {
        return cube(a) + sum_cubes(a + 1, b)
    }
}

function pi_sum(a, b) {
    if (a > b) {
        return 0
    } else {
        return 1 / (a * (a + 2)) + pi_sum(a + 4, b)
    }
}

function cube(x) {
    return x * x * x
}

function name(a, b, term, next) {
    if (a > b) {
        return 0
    } else {
        return term(a) + name(next(a), b)
    }
}

function sum_integers1(a, b) {
    function term(x) {
        return x
    }
    function next(y) {
        return y + 1
    }
    return name(a, b, term, next)
}

function sum_cubes1(a, b) {
    function next(y) {
        return y + 1
    }
    return name(a, b, cube, next)
}   

function pi_sum1(a, b) {
    function term(x) {
        return 1 / (x * (x + 2))
    }
    function next(y) {
        return y + 4
    }
    return name(a, b, term, next)
}

