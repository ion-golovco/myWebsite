let min =  -2.5
let max = 2.5
let xa;
let ya;
let inc;
function setup() {
    createCanvas(windowWidth,windowHeight*2);
    pixelDensity(1);
}   
function draw(){
    let maxI = 150
        loadPixels();
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            let a = map(x, 0, width, min, max)
            let b = map(y, 0, width, min, max)
            xa = a
            ya = b
            let n = 0
            while (n < 100) {
                let aa = a * a - b * b
                let ab = 2 * a * b
                a = aa + xa
                b = ab + ya
                if (a * a + b * b > 16) {
                    break;
                }
                n++
             
            }
            let bright = map(n, 0, maxI, 0, 1)

            bright = map(sqrt(bright), 0, 1, 0, 255)

            if (n === maxI) {
                bright = 0
            }
            let pix = (x + y * width) * 4;
            pixels[pix + 0] = bright
            pixels[pix + 1] = bright
            pixels[pix + 2] = bright
            pixels[pix + 3] = 255
        }
    }
       min+=0.01
        max-=0.01
    updatePixels()
}