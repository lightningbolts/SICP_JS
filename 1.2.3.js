function cube(x) {
    return x * x * x;
}
function p(x) {
    console.log("*")
    return 3 * x - 4 * cube(x);
}
function sine(angle) {
    if (!(Math.abs(angle) > 0.1)) {
        return angle
    } else {
        return p(sine(angle / 3));
    }
        
}
console.log(sine(12.15))