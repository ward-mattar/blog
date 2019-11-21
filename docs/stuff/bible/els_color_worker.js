/**
 * @author gadial
 */
function colorEls(text_array, color, els){
		var n = els.word.length
		text_array[els.index] = '<a name=text' + els.index + ">" + text_array[els.index] + "</a>"
		for (i=0; i < n; i++){
			var current_letter_pos = els.index+i*(Math.abs(els.jump));
			//this.text_colors[current_letter_pos] = color;
			//this.formatted_text[current_letter_pos] = '<span style="background-color:' + COLORS_ARRAY[color] + '">' + this.formatted_text[current_letter_pos] + '</span>';
			text_array[current_letter_pos] = '<span style="background-color:' + get_color(color) + '">' + text_array[current_letter_pos] + '</span>';
		}
		return text_array;
}

self.onmessage = function(event) {
//	self.postMessage('Worker hears: ' + event.data.type);
	if (event.data.type == 'colorEls'){
//		self.postMessage('Worker searches for els for word ' + event.data.str);
//		self.postMessage('Worker searches for els on text length ' + event.data.text.length);
		els_array = event.data.els_array;
		for (var i in els_array){
			result = colorEls(event.data.text_array, event.data.color, els_array[i]); // should be ok if text_array is passed by ref
		}
//		self.postMessage('Worker finished search. Result: ' + result.toString());
		self.postMessage('Color ELS done');
		//self.postMessage({'type': 'findElsResult', 'word': event.data.str, 'result': result});
	}
}