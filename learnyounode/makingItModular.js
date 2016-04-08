//myModule.js
var fs = require('fs')
var mymodule = require('./mymodule.js')

var dir = process.argv[2];
var ext= process.argv[3]
var pat = RegExp('\\.' + ext + '$');

