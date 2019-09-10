function draw() {
    dropDownList(15, 15, 150, 25, arrayList, select)
    //Tree fractal
    if (select == 0) {
        if (done == 0) {
            translate(w / 2, 0)
            background(back)
            treeFractal(0, 0, 200, 45)
            done++
        }
    } 
    //Weird circle triangle
    else if (select == 1) {
        if (done == 0) {
            translate(w / 2, h / 2 + 100)
            background(back)
            circleFractal(0, 0, 400)
            done++
        }
    } 
    //Fibonaci curve
    else if (select == 2) {
        if (done == 0) {
            translate(w / 2 - 120, h - 30)
            background(back)
            for (let i = 1; i < moves; i++) {
                stroke(250, 20, 90)
                let curr = fibonaciFractal(i)
                if (curr == 0) {
                    if (i % 2 == 0) {
                        rotate(90)
                    } else {
                        rotate(-90)
                    }
                }
                line(0, 0, 6, 0)
                translate(6, 0)
            }
            done++
        }
    } 
    //kock curve
    else if (select == 3) {
        if (done == 0) {
            translate(160, 80)
            //stroke(255)
            background(back)
            for (let i of kochCurve) {
                if (i == "F") {
                    line(0, 0, 4.2, 0)
                    strokeWeight(2)
                    translate(4.2, 0)
                } else if (i == "+") {
                    rotate(90)
                    stroke(100, 230, 30)
                } else {
                    rotate(-90)
                    stroke(250, 20, 90)
                }
            }
            done++
        }
    } 
    //sierpinski triangle
    else if (select == 4) {
        if (done == 0) {
            translate(350, 80)
            let angle = 120
            background(back)
            for (let i of sierpinskiTriangle) {
                if (i == "G" || i == "F") {
                    line(0, 0, 10, 0)
                    translate(10, 0)
                } else if (i == "+") {
                    rotate(-angle)
                    stroke(218, 165, 32)
                } else {
                    rotate(angle)
                    stroke(70, 130, 180)
                }
            }
            done++
        }
    } 
    //Dragon curve
    else if (select == 5) {
        if (done == 0) {
            translate(w/2+150, h/2+50)
            background(back)
            for(let i of dragonCurve){
                if(i=="F"){
                    line(0,0,4,0)
                    translate(4,0)
                }else if(i=="-"){
                    stroke(255,127,80)
                    rotate(-90)
                }else if(i=="+"){
                    stroke(102,205,170)
                    rotate(90)
                }
            }
            done++
        }
    } 
    //koch flake
    else if (select == 6) {
        if (done == 0) {
            translate(60, h-100)
            background(back)

            for(let i of kochFlake){
                if(i == "F"){
                    line(0,0,5,0)
                    translate(5,0)
                }else if(i=="-"){
                    stroke(215,147,50)
                    rotate(60)
                }else {
                    rotate(-60)
                    stroke(70,130,180)
                }
            }
            done++
        }
    }
    //gosper curve
    else if (select == 7) {
        if (done == 0) {
            translate(w/2+170, 70)
            background(back)
            for(let i of gosperCurve){
                if(i=="F"){
                    line(0,0,4,0)
                    translate(4,0)
                }else if(i=="-"){
                    stroke(0)
                    rotate(-60)
                }else if(i=="+"){
                    stroke(255)
                    rotate(60)
                }
            }
            done++
        }
    }  
    //levi curve
    else if (select == 8) {
        if (done == 0) {
            translate(490, 200)
            background(back)

            for(let i of leviCurve){
                if(i == "F"){
                    line(0,0,5,0)
                    translate(5,0)
                }else if(i=="-"){
                    stroke(215,147,50)
                    rotate(45)
                }else {
                    rotate(-45)
                    stroke(70,130,180)
                }
            }
            done++
        }   
    }
    //rings
    else if (select == 9) {
        if (done == 0) {
            translate(800, 600)
            background(back)
            for(let i of rings){
                if(i == "F"){
                    line(0,0,4,0)
                    translate(4,0)
                }else if(i=="-"){
                    stroke(215,147,50)
                    rotate(90)
                }else {
                    rotate(-90)
                    stroke(70,130,180)
                }
            }
            done++
        }
    }
    //quadritic island
    else if (select == 10) {
        if (done == 0) {
            translate(400, 320)
            background(back)
            for(let i of quadIsland){
                if(i == "F"){
                    line(0,0,5,0)
                    translate(5,0)
                }else if(i=="-"){
                    stroke(250,147,50)
                    rotate(90)
                }else {
                    rotate(-90)
                    stroke(70,190,18)
                }
            }
            done++
        }
    }
}




