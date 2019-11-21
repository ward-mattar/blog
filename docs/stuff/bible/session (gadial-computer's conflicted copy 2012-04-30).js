/**
 * @author gadial
 */
var MAX_RESULTS_TO_COLOR = 100;

	importScripts('funcs.js');
	self.print = function(text){
		postMessage({'type': 'message', 'message': text});
	}
	self.init = function(text){
		self.original_text = text;
		self.pure_text = cleanString(text);
		self.formatted_text = self.pure_text.split("");
		self.jump_size = 100;
		self.text_colors = [];
		self.active_color = 0;
		self.els_list = {};
		print("Hello world!");
		// self.findWords("יום")
		self.update();
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
	
	self.findWords = function(words){
		words = words.replace(/\s+/g," ");
		var words_array = words.split(" ");
		for (var i=0; i<words_array.length; i++){
			word = words_array[i];
			self.findAndColorWord(word);
		 }
	}
	
	self.findAndColorWord = function(word){
		var els_array = findEls(self.pure_text,word);
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
	
	
	// self.addWordToList = function(word, value, length){
		// //var color = COLORS_ARRAY[value];
		// var color = get_color(value);
		// var o = new Option(word + " (" + length + ")", value);
		// o.style.backgroundColor = color;
		// o.onclick = function(){
			// BIBLE_MAIN.active_session.fillElsList(word);
		// }
		// $(WORD_LIST_ID)[0].add(o);
	// }
	// self.findAndColorWord = function(word){
		// var els_array = findEls(this.pure_text,word);
// 		
		// //var color = COLORS_ARRAY[this.active_color];
		// for (var i in els_array){
			// this.colorEls(this.active_color, els_array[i]);
		// }
		// this.update();
		// this.els_list[word] = els_array;
		// this.addWordToList(word, this.active_color, els_array.length);
		// this.active_color += 1;
	// }
// 	
	// self.addEls = function(word, els_array){
// 		
		// color_worker = new Worker('els_color_worker.js');
		// that = this;
		// color_worker.onmessage = function(){
			// that.update();
			// that.els_list[word] = els_array;
			// that.addWordToList(word, this.active_color, els_array.length);
			// that.active_color += 1;	
		// }
		// color_worker.postMessage({'text_array': this.formatted_text, 'color': this.active_color, 'els_array': els_array});
// //		for (var i in els_array){
// //			setTimeout((function(x, caller, color){
// //            	return function(){
// //                	caller.colorEls(color, els_array[x]);
// //            	};
// //        	})(i, this, this.active_color), 5);
			// //this.colorEls(this.active_color, els_array[i]);
// //		}
// 		
// //		that = this;
// //		setTimeout(function(){
// //			that.update();
// //			that.els_list[word] = els_array;
// //			that.addWordToList(word, this.active_color, els_array.length);
// //			that.active_color += 1;	
// //		},6);		
	// }
// 	
	self.changeJumpSize = function(new_jump_size){
		this.jump_size = new_jump_size;
	}
// 
	// self.fillElsList = function(word){
		// var list = document.createElement("select");
		// var els_array = this.els_list[word];
// 		
		// list.id = ELS_LIST_ID.replace("#","");
		// list.size = 6;
// 		
		// for (i=0; i<els_array.length; i++){
			// var els = els_array[i];
			// var option = new Option("(" + els.index + ", " + els.jump + ")", i);
			// option.jump_to_location = els.index;
			// option.jump_size = Math.abs(els.jump);
			// option.onclick = function(){
				// if (this.jump_size > 5){ //otherwise it looks bad
					// BIBLE_MAIN.active_session.changePureTextJumpSize(this.jump_size);
				// }
// 				
				// window.location = "#original_text" + this.jump_to_location;
				// window.location = "#pure_text" + this.jump_to_location;
				// window.location = "#";
			// }
			// list.add(option);			
		// }
		// $(LISTS_ID)[0].removeChild($(ELS_LIST_ID)[0]);
		// $(LISTS_ID)[0].appendChild(list);
		// var list = $(ELS_LIST_ID)[0];
	// }
// 		
	self.update = function(){
		this.updatePureText();
		this.updateOriginalText();
	}	
	
	self.onmessage = function(event){
		switch (event.data.type){
			case 'init':
				self.init(event.data.text_filename);
				break;
			case 'find_words':
				self.findWords(event.data.words);
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

