'use strict'

function getRandomNumber(a, b) {
  return Math.floor(Math.random()*(b-a+1)) + a;
}

function generate(testLengthArray){
  var result = [];
  if (testLengthArray < 4) {
    testLengthArray.forEach((item, index) => {
      var object = {};
      object.input = [];
      for (let i = 0; i < item; i++) {
        object.input.push(getRandomNumber(-10000, 10000));
      }
      object.target = object.input(getRandomNumber(0, item));
      object.output = object.input.indexOf(object, target);
      result.push(object);
    })
  } else {
    testLengthArray.forEach((item, index) => {
      var object = {};
      object.input = [];
      for (let i = 0; i < item; i++) {
        object.input.push(getRandomNumber(-10000, 10000));
      }
      object.target = object.input(getRandomNumber(0, item));
      object.output = object.input.indexOf(object, target);
      result.push(object);
    });
  }
  return result;
}

module.exports = generate
