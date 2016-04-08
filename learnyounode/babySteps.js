var sum= 0; 
var argumentArr= process.argv; 
for(var i=2; i<argumentArr.length; i++){
	sum+= Number(argumentArr[i]);

}
console.log(sum);