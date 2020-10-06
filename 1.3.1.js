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
        return term(a) + name(next(a), b, term, next)
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

function integral(f, a, b, dx) {
    function add_dx(x) {
        return x + dx
    }
    return name(a + dx / 2, b, f, add_dx) * dx
}

//console.log(cube, 0, 1, 0.001)

function simpsonRule(f, a, b, n) {
    const y_0 = f(a)
    const h = (b - a) / n
    const y_n = f(a + n * h)
    function term(a) {
        return f(a)
    }
    function next(a) {
        return a + 2 * h
    }
    return (h / 3) * (y_0 + 4 * name(a + h, a + (n - 1) * h, term, next) + 2 * name(a + 2 * h, a + (n - 2) * h, term, next) + y_n)
}

function inc(k) {
    return k + 1;
}
function simpsons_rule_integral(f, a, b, n) {
    function helper(h) {
        function y(k) { 
            return f((k * h) + a);
        }
	function term(k) {
            return k === 0 || k === n
                   ? y(k)
                   : k % 2 === 0
                     ? 2 * y(k)
                     : 4 * y(k);
        }
        return sum(term, 0, inc, n) * (h / 3);
    }
    return helper((b - a) / n);
}

console.log(simpsonRule(cube, 0, 1, 1000))