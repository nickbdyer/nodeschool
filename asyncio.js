var fs = require('fs');

var lineCount = undefined;

function calculateLineCount(callback) {
  fs.readFile(process.argv[2], 'utf8', function finishedRead(err, data){
    lineCount = data.split('\n').length - 1
    callback();
  });
};

function outputLineCount() {
  console.log(lineCount);
};

calculateLineCount(outputLineCount);

// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })
