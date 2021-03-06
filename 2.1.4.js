const { head, tail, pair } = require(`./2.1.1`)

function show_interval(interval) {
    if (interval === undefined) {
        console.error("Cannot Comply...Span of interval y = 0...Restate Request")
    } else {
        console.log(`${lower_bound2(interval)}, ${upper_bound2(interval)}`)
    }
}

function add_interval(x, y) {
    return make_interval2(lower_bound2(x) + lower_bound2(y), upper_bound2(x) + upper_bound2(y));
}

function p(n) {
    return n >= 0;
}
function n(n) {
    return !p(n);
}
function the_trouble_maker(xl, xu, yl, yu) {
    const p1 = xl * yl;
    const p2 = xl * yu;
    const p3 = xu * yl;
    const p4 = xu * yu;
    make_interval(math_min(p1, p2, p3, p4),
        math_max(p1, p2, p3, p4));
}
function mul_interval(x, y) {
    const xl = lower_bound2(x);
    const xu = upper_bound2(x);
    const yl = lower_bound2(y);
    const yu = upper_bound2(y);
    return p(xl) && p(xu) && p(yl) && p(yu)
        ? make_interval2(xl * yl, xu * yu)
        : p(xl) && p(xu) && n(yl) && p(yu)
            ? make_interval2(xu * yl, xu * yu)
            : p(xl) && p(xu) && n(yl) && n(yu)
                ? make_interval2(xu * yl, xl * yu)
                : n(xl) && p(xu) && p(yl) && p(yu)
                    ? make_interval2(xl * yu, xu * yu)
                    : n(xl) && p(xu) && n(yl) && n(yu)
                        ? make_interval2(xu * yl, xl * yl)
                        : n(xl) && n(xu) && p(yl) && p(yu)
                            ? make_interval2(xl * yu, xu * yl)
                            : n(xl) && n(xu) && n(yl) && p(yu)
                                ? make_interval2(xl * yu, xl * yl)
                                : n(xl) && n(xu) && n(yl) && n(yu)
                                    ? make_interval2(xu * yu, xl * yl)
                                    : n(xl) && p(xu) && n(yl) && p(yu)
                                        ? the_trouble_maker(xl, xu, yl, yu)
                                        : error("lower larger than upper");
}

function div_interval(x, y) {
    //show_interval(x)
    //show_interval(y)
    //console.log(width_interval(y))
    if (width_interval(y) === 0) {
        Error("Cannot Comply...Span of interval y = 0...Restate Request");
    } else {
        return mul_interval(x, make_interval2(1 / upper_bound2(y), 1 / lower_bound2(y)));
    }
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
//Exercise 2.10
//show_interval(div_interval(make_interval2(9, 10), make_interval2(10, 10)))
//show_interval(mul_interval(make_interval2(1, 2), make_interval2(2, 3)))
//Exercise 2.12
function make_center_width(c, w) {
    return make_interval2(c - w, c + w);
}
function center(i) {
    return (lower_bound2(i) + upper_bound2(i)) / 2;
}
function width(i) {
    return (upper_bound2(i) - lower_bound2(i)) / 2;
}

function make_center_percent(c, p) {
    return make_interval2(c - c * p, c + c * p)
}

//show_interval(make_center_percent(5, 0.4))
//show_interval(make_center_width(5, 2))
//Exercise 2.14
function par1(r1, r2) {
    return div_interval(mul_interval(r1, r2),
        add_interval(r1, r2));
}
function par2(r1, r2) {
    const one = make_interval2(1, 1);
    return div_interval(one,
        add_interval(div_interval(one, r1),
            div_interval(one, r2)));
}
const a = make_center_percent(5, 0.01)
const b = make_center_percent(10, 0.02)
const one = make_interval2(1, 1)

//show_interval(par2(a, a))
//show_interval(par1(a, a))
//show_interval(par1(a, b))
//show_interval(par2(a, b))
show_interval(mul_interval(div_interval(one, a), a))
