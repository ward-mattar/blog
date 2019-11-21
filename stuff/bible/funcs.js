var letter_regex = /[a-zA-Zא-ת]/
var MAX_JUMP = 100


//taken from http://ridiculousfish.com/blog/posts/colors.html
function get_hue(idx) {
   /* Here we use 31 bit numbers because JavaScript doesn't have a 32 bit unsigned type, and so the conversion to float would produce a negative value. */
   var bitcount = 31;
   
   /* Reverse the bits of idx into ridx */
   var ridx = 0, i = 0;
   for (i=0; i < bitcount; i++) {
      ridx = (ridx << 1) | (idx & 1);
      idx >>>= 1;
   }
   
   /* Divide by 2**bitcount */
   var hue = ridx / Math.pow(2, bitcount);
   
   /* Start at .6 (216 degrees) */
   return (hue + .6) % 1;
}

function get_color(idx){
	var hue = get_hue(idx);
	var degrees = Math.round(hue * 360);
	return 'hsl(' + degrees + ', 100%, 65%)';
}

function cleanHebrewTerminatingLetters(str){
	return str.replace(/ץ/g,"צ").replace(/ן/g,"נ").replace(/ם/g,"מ").replace(/ך/g,"כ").replace(/ף/g,"פ")
}

function cleanString(str){
	var result_str = ""
	for (i=0; i<str.length; i++){
		if (letter_regex.test(str[i])){
			result_str += str[i];
		}
	} 
	//result_str = cleanHebrewTerminatingLetters(result_str);
	return result_str.toLowerCase();
}

function addHebrewTerminatingLetters(str){
	return str.replace(/(צ|ץ)/g,"(צ|ץ)").replace(/(ם|מ)/g,"(ם|מ)").replace(/(פ|ף)/g,"(פ|ף)").replace(/(נ|ן)/g,"(נ|ן)").replace(/(כ|ך)/g,"(כ|ך)")
}

function insertLineBreaks(str, n){
	if (n == 0){
		return str;
	}
	var dots = "";
	for (i=0; i<n; i++, dots += ".");
	var regex_string = "(" + dots + ")"
	var regex = new RegExp(regex_string,"g")
	var new_str = str.replace(regex, "$1" + "\n");
	last_char = new_str.length - 1;
	if (new_str[last_char] == '\n'){
		new_str = new_str.substr(0,last_char);
	}
	return new_str;
}

function colorString(str, color_hash){
	var result_str = "";
	var letter_pos = 0;
	for (pos = 0; pos < str.length; pos += 1){
		if (letter_regex.test(str[pos])){
			if (color_hash[letter_pos]){
				result_str += '<span style="background-color:' + color_hash[letter_pos] + '">'+ str[pos] +'</span>';
			}
			else{
				result_str += str[pos];
			}
			letter_pos += 1;
		}
		else{
			result_str += str[pos];
		}
	}
	return result_str;
}

function formatText(text, formatted_text){
	var result_str = "";
	var letter_pos = 0;
	for (pos = 0; pos < text.length; pos += 1){
		if (letter_regex.test(text[pos])){
			result_str += formatted_text[letter_pos];
			letter_pos += 1;
		}
		else{
			result_str += text[pos];
		}
	}
	return result_str;
}