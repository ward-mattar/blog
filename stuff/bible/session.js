/**
 * @author gadial
 */
var MAX_RESULTS_TO_COLOR = 500;

	importScripts('funcs.js');
	self.print = function(text){
		postMessage({'type': 'message', 'message': text});
	}
	self.log = function(message){
		postMessage({'type': 'log', 'message': message});
	}

	self.init = function(text){
		self.original_text = text;
		self.pure_text = cleanString(text);
		self.formatted_text = self.pure_text.split("");
		self.jump_size = 100;
		self.text_colors = [];
		self.active_color = 0;
		self.els_list = {};
		self.print("Hello world from worker!");
		// self.findWords("יום")
		self.update();
	}

	self.changeJumpSize = function(new_jump_size){
	  self.jump_size = new_jump_size;
	  self.updatePureText();
	}

	self.splitTextToChunks = function(text){
		var chunks = [];
		var chunkSize = 10000;

		while (text) {
    		if (text.length < chunkSize) {
        		chunks.push(text);
        		break;
    		}
    		else {
        		chunks.push(text.substr(0, chunkSize));
        		text = text.substr(chunkSize);
    		}
		}
		return chunks;
	}	
	self.updatePureText = function(){
		var updated_pure_text = formatText(insertLineBreaks(self.pure_text, self.jump_size), self.formatted_text);
		updated_pure_text = updated_pure_text.replace(/<a name=text/g,'<a name=pure_text');
		postMessage({'type': 'update_pure_text', 'pure_text': updated_pure_text});
	}
	
	self.updateOriginalText = function(){
		var updated_original_text = formatText(self.original_text, self.formatted_text);
		updated_original_text = updated_original_text.replace(/<a name=text/g,'<a name=original_text');
		postMessage({'type': 'update_original_text', 'original_text': updated_original_text});
	}
	
	self.findWords = function(words, min_jump, max_jump){
		words = words.replace(/\s+/g," ");
		var words_array = words.split(" ");
		for (var i=0; i<words_array.length; i++){
			word = words_array[i];
			self.findAndColorWord(word, min_jump, max_jump);
		 }
	}
	self.findEls = function(text, str, min_jump, max_jump){
		var result = []
		var dots = "";
		var regex_string;
		var message_counter = 0;
		var search_range = max_jump - min_jump;
		for (jump = min_jump; jump <= max_jump; jump++){
			if (message_counter == 0){
			    self.print('Finding "' + str + '", ' + 'so far completed ' + Math.floor(100*(jump-min_jump)/search_range) + '%');
			}
			message_counter = (message_counter + 1) % (Math.floor(search_range / 100));
// 			self.print('Finding "' + str + '" for jump length ' + jump);
			var gap = jump-1;
// 			regex_string = str.replace(/(.)/g,"$1" + dots).substr(0,str.length+(str.length-1)*(jump-1));
			regex_string = str.split("").join(".{" + gap + "}");
			regex_string = addHebrewTerminatingLetters(regex_string);
			var regex = new RegExp(regex_string, "g"); 
			while (match = regex.exec(text)) {
				var els = []
				els.word = str;
				els.index = match.index;
				els.jump = jump
					result.push(els);
			}
			
			//negative jumps
// 			regex_string = str.split("").reverse().join("").replace(/(.)/g,"$1" + dots).substr(0,str.length+(str.length-1)*(jump-1));
			regex_string = str.split("").reverse().join(".{" + gap + "}");
			regex_string = addHebrewTerminatingLetters(regex_string);
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
		self.print('Finished searching for "' + str + '"');
		return result;
	}
	
	self.findAndColorWord = function(word, min_jump, max_jump){
		var els_array = findEls(self.pure_text,word, min_jump, max_jump);
		if (els_array.length <= MAX_RESULTS_TO_COLOR){
			for (var i in els_array){
				self.colorEls(self.active_color, els_array[i]);
			}
			self.update();
		}
		else{
			postMessage({'type': 'log', 'text': 'too many (' + els_array.length + ') results; will not color them'});
		}
		self.els_list[word] = els_array;
		postMessage({'type':'add_word_to_list', 'word': word, 'color':get_color(self.active_color), 'length': els_array.length});
		// self.addWordToList(word, get_color(self.active_color), els_array.length);
		self.active_color += 1;
	}

	self.colorEls = function(color, els){
		var n = els.word.length
		self.formatted_text[els.index] = '<a name=text' + els.index + ">" + self.formatted_text[els.index] + "</a>"
		for (i=0; i < n; i++){
			var current_letter_pos = els.index+i*(Math.abs(els.jump));
			self.formatted_text[current_letter_pos] = '<span style="background-color:' + get_color(color) + '">' + self.formatted_text[current_letter_pos] + '</span>';
		}
	}
	self.update = function(){
		self.updatePureText();
		self.updateOriginalText();
	}	
		
	self.onmessage = function(event){
		switch (event.data.type){
			case 'init':
				self.init(event.data.text_filename);
				break;
			case 'find_words':
				self.findWords(event.data.words, event.data.min_jump, event.data.max_jump);
				break;
			case 'change_jump_size':
				self.changeJumpSize(event.data.new_jump_size);
				self.updatePureText();
				break;
			case 'fill_els_list_for':
				postMessage({'type': 'fill_els_list', 'els_array': self.els_list[event.data.word]});
				break;
			case 'goto_word':
				if (event.data.word_jump_size){
					self.changeJumpSize(event.data.word_jump_size);
					self.updatePureText();	
				}
				postMessage({'type': 'goto_word', 'word_location': event.data.word_location});
				break;
		}
	}

