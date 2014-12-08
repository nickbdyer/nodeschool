  
var arr = process.argv;
var total = null;

for (i=2; i< arr.length; i++) {
  total += +process.argv[i];
};

console.log(total)