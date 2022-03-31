const ftoc = function(fahrenheit) {
  celsius = (fahrenheit-32)*5/9;   
  return +(Math.round(celsius + "e+1")  + "e-1");
};

const ctof = function(celsius) {
  fahrenheit = (celsius*9/5)+32;
  return +(Math.round(fahrenheit + "e+1")  + "e-1");
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
