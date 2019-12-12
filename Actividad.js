function exercise1(num) {
    var invert = 0
    var rest = num
    do {
        invert = invert * 10 + (rest % 10)
        rest = Math.floor(rest / 10)
    } while (rest > 0)
    return invert
}
console.log(2341);
console.log(exercise1(2341));

function exercise2(word) {
    word=word.replace(/ /g, "");
 
	for (var i=0;i<word.length;i++){
		if(word[i]!=word[word.length-i-1]){
			return false;
		}
	}
	return true;
}
console.log(exercise2("lavan esa base naval"));//palindromo
console.log(exercise2("nananananannabatman"));//noPalindromo

var exercise3= function(text) {
    return text.split('').sort().join('');
}
console.log(exercise3('rodolfoaurelio'))