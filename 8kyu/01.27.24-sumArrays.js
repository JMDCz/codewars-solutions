// Sum Numbers
function sum (numbers) {
    "use strict";
    if(numbers.length === 0) {
      return 0
    }
  
    const result = numbers.reduce((accumulator, currentNumber) => {
    // Check if the current element is a number
    if (typeof currentNumber === 'number' && !isNaN(currentNumber)) {
      return accumulator + currentNumber;
    } else {
      return accumulator;
    }
  }, 0);

  return result;

};