const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	let total=0;
  for(elem of array){
    total += elem;
  }
  return total;
};

const multiply = function(array) {
  let product=1;
  for (elem of array){
    product *= elem;
  }
  return product
};

const power = function(base, exponent) {
	return base**exponent;
};

const factorial = function(number) {
  let factorial=1;
  for (i=number; i>0; i--){
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
