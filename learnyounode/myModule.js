
module.exports= 
	function (err, list) { 
	for(var i=0; i<list.length; i++){
		if(pat.test(list[i])){
			console.log(list[i]);
		}
	}; 

}
