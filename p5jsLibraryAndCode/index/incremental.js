

let r = Math.floor(Math.random() * 256)
let rR = 0
let inc = 1
    mainR()
    function mainR() {
        function incremental(n, inc) { rR = n + inc }
        function minusIncremental(n, inc) { rR = n - inc }
        if (rR < r) { while (rR < r) { incremental(rR, inc) } }
        if (rR > r) { while (rR > r) { minusIncremental(rR, inc) } }
        //if (rR > 240) { return console.log("gata boss") }
        if (rR >= r) {
            r = Math.floor(Math.random() * 256); mainR()
        }
    }