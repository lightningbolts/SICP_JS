function g(x) {
    if (x <= 0) {
        return -x
    } else {
        return 2 * x - 41
    }
}
console.log(g(g(g(-30.5))))