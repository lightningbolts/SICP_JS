function naive_prime(n) {
    let d = 2
    while (d < n/2 + 1) {
        if (n % d === 0) {
            return false
        } else {
            d = d + 1
        }
    } 
    return true 
} 

console.log(naive_prime(37))
