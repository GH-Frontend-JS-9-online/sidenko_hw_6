'use strict'

// task 1
let p                                       // counter
let arr = []                                // array
for (p = 0; p < 10; p++) {
  arr[p] = Math.round(Math.random() * 100)   // generate random array of 10 elem from 0 to 100 value
}

let maxValue
let minValue
let sumValue = 0
let indexMinValue
let indexMaxValue

maxValue = Math.max(...arr)                 // Find in array max
minValue = Math.min(...arr)                 // Find in array min

for (p = 0; p < 10; p++) {                   // Find array sum
  sumValue += arr[p]
}

// task 2

function replaceMinMaxArr (callback) {
  arr[indexMinValue] = maxValue
  arr[indexMaxValue] = minValue

  function searchMinMaxIndex () {
    for (p = 0; p < 10; p++) {
      if (arr[p] == minValue) { indexMinValue = p}
      if (arr[p] == maxValue) { indexMaxValue = p}
    }
  }
}

replaceMinMaxArr(searchMinMaxIndex())

// task 3

let arrFooBar = []

for (p = 0; p < 100; p++) {
  arrFooBar[p] = Math.round(Math.random() * 100)            // generate random array of 100 elem from 0 to 100 value
}

function replaceFooBar (numDiv1, numDiv2) {

  for (p = 0; p < 100; p++) {
    if ((arrFooBar[p] % numDiv1 == 0) && (arrFooBar[p] % numDiv2 == 0)) {
      arrFooBar[p] = 'foobar'
    }

    if (arrFooBar[p] % numDiv1 == 0) {
      arrFooBar[p] = 'foo'
    }

    if (arrFooBar[p] % numDiv2 == 0) {
      arrFooBar[p] = 'bar'
    }
  }
}

replaceFooBar(3, 7)