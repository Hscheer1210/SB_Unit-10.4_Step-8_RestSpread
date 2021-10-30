// Refactor the following function to use the rest operator and an arrow function

function filterOutOdds1() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
}



// Arrow functions shorthand using the rest operator

const filterOutOdds2 = (...nums) => nums.filter(num => num % 2 === 0);
  


// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument
// Use the rest and spread operator

const findMin = (...nums) =>
    nums.reduce((min, currVal) => {
        return currVal < min ? currVal : min;
    })
;



// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object

const mergeObjects = (object1, object2) => ({...object1, ...object2});



// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments
// The function should return a new array with the original array values and all of the additional arguments doubled

const doubleAndReturnArgs = (nums, ...vals) => [...nums, ...vals.map(x => x * 2)];



// Write the following functions using the rest/spread operators, and refactor them to be arrow functions
  
/** remove a random element in the items array
and return a new array without that item. */
  
const removeRandom = (items) => {
  let removeVal = Math.floor(Math.random() * items.length);
  return [...items.slice(0, removeVal), ...items.slice(removeVal + 1)];
}



/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1.slice(), ...array2.slice()];



/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({...obj, [key] : val});



/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}



/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}



/** Return a new object with a modified key and value. */

const update = (obj, key, val) => ({...obj, [key] : val});
