var fs = require('fs')

var filename = process.argv[2];

function callback (err, data) { 
if(!err){
	console.log( data.toString().split('\n').length - 1); 

}}

fs.readFile(filename,'utf8',callback);

