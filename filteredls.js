var fs = require('fs');
var path = require('path');

var pathname = process.argv[2];
var fileExtention = process.argv[3];

var filteredList = undefined;

function filterList(pathname, fileextention, callback) {
  fs.readdir(pathname, function pathRead(err, data){
    filteredList = data.filter(function(file) {
      return path.extname(file) === "." + fileextention
    });
    callback()
  });
};

function outputList () {
  filteredList.forEach(function(file) {
    console.log(file);
  });
};

filterList(pathname, fileExtention, outputList);

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
