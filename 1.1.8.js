function sqrt(x) {
    return sqrt_iter(1, x)   
}

function sqrt_iter(guess, x) {
    if (guess_good_enough(guess, x)) {
        return guess
    } else {
        new_guess = improved_guess(guess, x)
        return sqrt_iter(new_guess, x)    
    }
}

function guess_good_enough(guess, x) {
    return Math.abs(guess * guess - x) < 0.000001
}

function improved_guess(guess, x) {
    new_guess = (guess + x/guess)/2
    return new_guess
}
console.log(sqrt(100))