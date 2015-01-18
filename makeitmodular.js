// var mymodule = require('./makeit')

// var path = process.argv[2];
// var extention = process.argv[3];

// mymodule(path, extention, callback)


// function callback(err, data){
//   if (err) {
//     console.log(err);
//   } else {
//     data.forEach(function(item) {
//       console.log(item);
//     });
//   }
// }

var filterFn = require('./makeit')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
