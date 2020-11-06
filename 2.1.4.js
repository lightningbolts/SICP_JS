const { head, tail, pair } = require(`./2.1.3`)

function show_interval(interval) {
    console.log(`${lower_bound2(interval)}, ${upper_bound2(interval)}`)
}

function add_interval(x, y) {
    return make_interval2(lower_bound2(x) + lower_bound2(y), upper_bound2(x) + upper_bound2(y));
}

function mul_interval(x, y) {
    const p1 = lower_bound(x) * lower_bound(y);
    const p2 = lower_bound(x) * upper_bound(y);
    const p3 = upper_bound(x) * lower_bound(y);
    const p4 = upper_bound(x) * upper_bound(y);
    return make_interval(Math.min(p1, p2, p3, p4),
        Math.max(p1, p2, p3, p4));
}

function div_interval(x, y) {
    return mul_interval(x, make_interval(1 / upper_bound(y),
        1 / lower_bound(y)));
}

//Exercise 2.7
//Only this function is compatible with add_interval
function make_interval2(x, y) {
    return pair(x, y)
}

function lower_bound2(interval) {
    return head(interval)
}

function upper_bound2(interval) {
    return tail(interval)
}
//Only this function above is compatible with add_interval
function make_interval(resistor, tolerance) {
    return pair(resistor, tolerance)
}

function lower_bound(interval) {
    return head(interval) - tail(interval) * head(interval)
}

function upper_bound(interval) {
    return head(interval) + tail(interval) * head(interval)
}

function make_interval1(resistor, tolerance) {
    return pair(resistor - tolerance * resistor, resistor + tolerance * resistor)
}
function lower_bound1(interval) {
    return head(interval)
}

function upper_bound1(interval) {
    return tail(interval)
}

//show_interval(add_interval(make_interval(6.8, 0.1), make_interval(4.7, 0.05)))
//show_interval(make_interval2(5, 2))
//show_interval(make_interval2(2, 5))
//show_interval(add_interval(make_interval2(5, 2), make_interval2(2, 5)))
//Exercise 2.8

function sub_interval(x, y) {
    return make_interval2(Math.abs(lower_bound2(x) - lower_bound2(y)), Math.abs(upper_bound2(x) - upper_bound2(y)));
}

//show_interval(sub_interval(make_interval2(5, 2), make_interval2(7, 1)))
//Exercise 2.9

function width_interval(interval) {
    return (Math.abs(lower_bound2(interval) - upper_bound2(interval))) / 2
}

