var fs = require('fs')

module.exports= function(dirName, extStr, callBack){

	fs.readdir(dirName,function(err, list) { 
		if(err){
			return callBack(err)
		}
		var ext= extStr;
       var pat = RegExp('\\.' + ext + '$');

		callBack(null,list);

})

}
