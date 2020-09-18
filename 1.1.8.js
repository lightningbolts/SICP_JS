

 const sqrt = x => sqrt_iter(1, x);

const sqrt_iter = (guess, x) => {
    if (guess_good_enough(guess, x)) {
        return guess
    } else {
        new_guess = improved_guess(guess, x)
        return sqrt_iter(new_guess, x)
    }
}

const guess_good_enough = (guess, x) => Math.abs(guess * guess - x) < 0.000001


const improved_guess = (guess, x) => new_guess = (guess + x / guess) / 2

//console.log(sqrt(100))

module.exports = {
    sqrt
}