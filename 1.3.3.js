function sdfjlk(a) {
    if (isNaN(a)) {
        return Error("Not a number")

    } else {
        console.error("Tis a number, but thy program stopped.")
    }
}

//console.log(sdfjlk("apple"))

function average(x, y) {
    return (x + y) / 2;
}

function positive(x) { return x > 0; }
function negative(x) { return x < 0; }

function abs(x) {
    return x >= 0 ? x : -x;
}

function close_enough(x, y) {
    return abs(x - y) < 0.00000001;
}

function search(f, neg_point, pos_point) {
    const midpoint = average(neg_point, pos_point);
    if (close_enough(neg_point, pos_point)) {
        return midpoint;
    } else {
        const test_value = f(midpoint);
        if (positive(test_value)) {
            return search(f, neg_point, midpoint);
        } else if (negative(test_value)) {
            return search(f, midpoint, pos_point);
        } else {
            return midpoint;
        }
    }
}

function half_interval_method(f, a, b) {
    const a_value = f(a);
    const b_value = f(b);
    return negative(a_value) && positive(b_value)
        ? search(f, a, b)
        : negative(b_value) && positive(a_value)
            ? search(f, b, a)
            : error("values are not of opposite sign");
}
const tolerance = 0.00001;
function fixed_point(f, first_guess) {
    function close_enough(x, y) {
        return Math.abs(x - y) < tolerance;
    }
    function try_with(guess, count) {
        const next = f(guess);
        //console.log(next)
        //console.log(count)
        return close_enough(guess, next)
            ? next
            : try_with(next, count + 1);
    }
    return try_with(first_guess, 1);
}

function counter(x) {
    console.log(x => x + 1)
}
//console.log(fixed_point(x => Math.log(1000) / Math.log(x), 2))
//console.log(fixed_point(x => 1 / 2 * (Math.log(1000) / Math.log(x) + x), 2))
//console.log(half_interval_method(Math.sin, 2, 4));
//console.log(half_interval_method(x => x * x * x - 2 * x - 3, 1, 2))

function cont_frac(fn, fd, k) {
    function helper(i) {
        if (i > k) {
            return 0
        } else {
            return fn(i) / (fd(i) + helper(i + 1))
        }
    }
    return helper(1)
}
//console.log(cont_frac(i => 1, i => 1, 3))

function cont_frac_iter(fn, fd, k) {
    function iter(i, frac) {
        if (i === 0) {
            return frac
        } else {
            return iter(i - 1, fn(i) / (fd(i) + frac))
        }
    }
    return iter(k, 0)
}


//console.log(cont_frac_iter(i => 1, i => 1, 3))

function D(i) {
    if (i < 3) {
        return i
    } else if (i % 3 === 0 || i % 3 === 1) {
        return 1
    } else {
        return D(i - 3) + 2
    }
}
//console.log(cont_frac_iter(i => 1, D, 300))

function cont_frac_iter_sub(fn, fd, k) {
    function iter(i, frac) {
        if (i === 0) {
            return frac
        } else {
            return iter(i - 1, fn(i) / (fd(i) - frac))
        }
    }
    return iter(k, 0)
}

function tan_cf(x, k) {
    function fn(i) {
        if (i === 1) {
            return x
        } else {
            return x * x
        }
    }
    function fd(i) {
        return 2 * i - 1
    }
    return cont_frac_sub(fn, fd, k)
}
function cont_frac_sub(fn, fd, k) {
    function helper(i) {
        if (i > k) {
            return 0
        } else {
            return fn(i) / (fd(i) - helper(i + 1))
        }
    }
    return helper(1)
}
//console.log(tan_cf(convert_radians(180), 14))

function convert_radians(x) {
    return x * Math.PI / 180.0
}
module.exports = { fixed_point }