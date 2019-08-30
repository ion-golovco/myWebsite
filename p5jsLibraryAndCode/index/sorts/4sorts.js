let limit = 1500;

let time = 1

//bubble
let inver = false
let a = 0, b = 0, c;
let sw = 0, sw1 = 0;
let x, y;
let arr2 = [];
//quick
let width, w;
let sw2 = 0;
let x2, y2;
let arrayV = []
let arr3 = []
let pivoter
let states = [];
//insertion
let sw4 = 0;
let x4, y4;
let arr5 = []
//selection
let sw3 = 0;
let x3, y3;
let arr4 = []
let arry = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  w = windowWidth
  y = windowHeight / 2
  y2 = windowHeight
  let i = 1
  //random sort
  while (limit >= i) {
    arr2.push(random(1, y / 3)); i++;
    arr3.push(random(1, y / 3)); 
    arr4.push(random(1, y2 / 6));
    arr5.push(random(1, y2 / 6));
  }
  //invers sort
  //while (limit >= i) {arr3.push((i/limit)*y2/3);i++;} arr3.reverse()
  arrayV = arr3
}
let j = 0; ji = 0, i = 1
function draw() {
  //quick
  arrayV = arr3
  if (sw2 == 1) {
    quickSort(arr3, 0, arr3.length - 1)
  }
  background(10)
  noStroke()
  fill(255)
  width = w / limit / 2
  x2 = 0
  for (let i in arrayV) {
    if (states[i] == 0) {
      fill(200, 0, 0);
    } else if (states[i] == 1) {
      fill(100);
    } else {
      fill(255);
    }
    rect(x2, y - (arrayV[i] * 3), width, arrayV[i] * 3)
    x2 += width
  }
  //selection
  if (sw3 == 1) {
    if (ji < arr4.length - 1) {
      ji++
    } else {
      sw3 = 0
      arr4.splice(0, 1)
      arr4.unshift(0)
    }
    let minimum = ji
    for (let i = ji + 1; i < arr4.length; i++) {
      if (arr4[i] < arr4[minimum]) {
        minimum = i
      }
    }
    arry = [ji, minimum]
    if (minimum !== ji) {
      let temp = arr4[ji]
      let temp2 = arr4[minimum]
      arr4[ji] = temp2
      arr4[minimum] = temp
    }
  }
  x3 = 0
  for (let i in arr4) {
    rect(x3, y2 - (arr4[i] * 3), width, arr4[i] * 3)
    x3 += width
  }
  x4 = w / 2
  fill(255)
  //insertion
  if (sw4 == 1) {
    if (i < arr5.length - 1) {
      j = i
      while (j > 0 && arr5[j - 1] > arr5[j]) {
        let temp = arr5[j - 1]
        let temp2 = arr5[j]
        arr5[j - 1] = temp2
        arr5[j] = temp
        j--
      }
    } else { sw4 = 0 }
    i++
  }
  fill(255)
  for (let i in arr5) {
    rect(x4, y - (arr5[i] * 3), width, arr5[i] * 3)
    x4 += width
  }

  //bubble
  x = w / 2
  for (let i in arr2) {
    rect(x, y2 - (arr2[i] * 3), width, arr2[i] * 3)
    x += width
  }
  if (sw == 1) {
    bubbleSort(arr2)
  } else {
    a = 0
    b = 0
  }
  fill(140)
  if (a !== 0) {
    fill(200, 0, 0)
    rect((width * a[1]) + w / 2, y2 - (a[0] * 3), width, a[0] * 3)
    rect((width * b[1]) + w / 2, y2 - (b[0] * 3), width, b[0] * 3)
  }
  if (sw1 == 1) {
  } else {
    c = 0
  }
  if (c >= arr2.length) {
    setTimeout(exper(), 1000)
  }
  c += limit / 20

  text("Quick Sort", 10, 20)
  text("Selection Sort", 10, y + 20)
  text("Bubble Sort", w / 2 + 10, y + 20)
  text("Insertion Sort", w / 2 + 10, 20)

}
async function swap(arr, a, b) {
  sw2 = 0
  await sleep(time);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
async function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }
  let pivotValue = arr[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);

  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }
  return pivotIndex;
}
async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  states[index] = -1;
  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
function bubbleSort(arr) {
  let change = 0
  for (let i = 0; i <= arr.length; i++) {
    if (inver == true) {
      if (arr[i] < arr[i + 1]) {
        vizuali(arr[i], arr[i + 1], i)
        let current = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = current
        change++
        //return arr
      }
    } else {
      if (arr[i] > arr[i + 1]) {
        vizuali(arr[i], arr[i + 1], i)
        let current = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = current
        //return arr
        change++
      }
    }
  }
  if (change == 0) {
    allGreen()
  }
}
function allGreen() {
  sw = 0
  sw1 = 1
}
function vizuali(ar, br, index) {
  a = [ar, index]
  b = [br, index + 1]
}
function exper() {
  sw1 = 0
}

