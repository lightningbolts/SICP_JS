//Exercise 2.2

const {head, pair, tail} = require("./2.1.1")

function print_point(p) {
    console.log(`(${x_point(p)}, ${y_point(p)})`)
}

function make_segment(p1, p2) {
    return pair(p1, p2)
}

function start_segment(ls) {
    return head(ls)
}

function end_segment(ls) {
     return tail(ls)
}

function make_point(x, y) {
    return pair(x, y)
}

function x_point(p) {
    return head(p)
}

function y_point(p) {
    return tail(p)
}

function average(x, y) {
    return (x + y) / 2
}

function mid_point(line_segment) {
    const start = start_segment(line_segment)
    const end = end_segment(line_segment)
    return make_point(average(x_point(start), x_point(end)), average(y_point(start), y_point(end)))
}

//print_point(mid_point(make_segment(make_point(0, 0), make_point(10, 0))))
//Exercise 2.3
//Part #1: Perimeter

function rectangle(p1, p2) {
    return make_segment(p1, p2)
}

function get_w_h(rec) {
    const point1 = start_segment(rec)
    const point2 = end_segment(rec)
    const width = Math.abs(x_point(point1) - x_point(point2))
    const height = Math.abs(y_point(point1) - y_point(point2))
    return [width, height]
}

function perimeter(rec) {
    const [width, height] = get_w_h(rec)
    return 2 * (width + height)
}

//Part #2 Area

function area(rec) {
    const [width, height] = get_w_h(rec)
    return width * height
}
//console.log(area(rectangle(make_point(0, 0), make_point(10, 10))))

