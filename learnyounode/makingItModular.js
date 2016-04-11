
var mymodule = require('./mymodule.js')

var dir = process.argv[2];
var ext= process.argv[3]
var pat = RegExp('\\.' + ext + '$');

var callBack= function(err,list){
			if(err){
			console.log(err);
		}
	for(var i=0; i< list.length; i++){
		if(pat.test(list[i])){
			console.log(list[i]);
		}
	}

}


mymodule(dir,ext,callBack);
