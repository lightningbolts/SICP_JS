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

//console.log(half_interval_method(Math.sin, 2, 4));
console.log(half_interval_method(x => x * x * x - 2 * x - 3, 1, 2))