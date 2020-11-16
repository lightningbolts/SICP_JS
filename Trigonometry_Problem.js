function sin(t, y) {
    return t * Math.sin(y * Math.PI / 180)
}

//console.log(sin(5, 120))

function str(x) {
    //console.log(x)
    function reverse_list(x) {
        //console.log(x)
        if (x.length === 0) {
            return x
        } else {
            let car = x.shift()
            let test = reverse_list(x) + [ car ]
            //console.log("jklsdf", test)
            return test
        }
    }
    let list = x.split("")
    let list_reversed = reverse_list(list)
    return list_reversed
}

//console.log(str("lan"))

function length(x) {
    function length_helper(y) {
        if (y.length === 0) {
            return 0
        } else {
            let item = y.pop()
            //console.log(y)
            return 1 + length_helper(y) 
        }
    }
    return length_helper(x.split(""))
}

console.log(length("zhihong"))