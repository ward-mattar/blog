/**
 * @author gadial
 */

var MAX_JUMP = 300

function addHebrewTerminatingLettersRegexpString(str){
	return str.replace(/(צ|ץ)/g,"(צ|ץ)").replace(/(ם|מ)/g,"(ם|מ)").replace(/(פ|ף)/g,"(פ|ף)").replace(/(נ|ן)/g,"(נ|ן)").replace(/(כ|ך)/g,"(כ|ך)")
}
function findEls(text, str){
	var result = []
	var dots = "";
	var regex_string;
	for (jump = 1; jump<= MAX_JUMP; jump++){
		regex_string = str.replace(/(.)/g,"$1" + dots).substr(0,str.length+(str.length-1)*(jump-1));
		regex_string = addHebrewTerminatingLettersRegexpString(regex_string);
 		var regex = new RegExp(regex_string, "g"); 
		while (match = regex.exec(text)) {
			var els = []
			els.word = str;
			els.index = match.index;
			els.jump = jump
   			result.push(els);
		}
		
		//negative jumps
		regex_string = str.split("").reverse().join("").replace(/(.)/g,"$1" + dots).substr(0,str.length+(str.length-1)*(jump-1));
		var regex = new RegExp(regex_string, "g"); 
		while (match = regex.exec(text)) {
			var els = []
			els.word = str;
			els.index = match.index
			els.jump = -jump
   			result.push(els);
		}
		
		dots += ".";
	}
	return result;
}

self.onmessage = function(event) {
//	self.postMessage('Worker hears: ' + event.data.type);
	if (event.data.type == 'findEls'){
//		self.postMessage('Worker searches for els for word ' + event.data.str);
//		self.postMessage('Worker searches for els on text length ' + event.data.text.length);
		result = findEls(event.data.text, event.data.str);
//		self.postMessage('Worker finished search. Result: ' + result.toString());
		self.postMessage({'type': 'findElsResult', 'word': event.data.str, 'result': result});
	}
};  