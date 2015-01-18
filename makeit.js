// var fs = require('fs');
// var path = require('path');

// function filteredList(pathname, extention, callback) {
//   fs.readdir(pathname, function (err, data) {
//     if (err) {
//       return callback(err);
//     } else {
//       filteredList = data.filter(function(file) {
//       return path.extname(file) === "." + extention
//         })
//       }
//     callback(null, filteredList)
//   });
// };

// module.exports = filteredList;


var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}