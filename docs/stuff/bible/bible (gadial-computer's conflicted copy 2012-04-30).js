var BIBLE_MAIN = {}
var PURE_TEXT_ID = "#pure_text"
var ORIGINAL_TEXT_ID = "#original_text"
var LISTS_ID = "#lists"
var WORD_LIST_ID = "#word_list"
var ELS_LIST_ID = "#els_list"

// function newSession(text_filename){
	// new_session = {};
	// $.get(text_filename, function(data){
		// text_node = $(data).find("text")[0];
		// text_node.normalize(); 
		// text = text_node.childNodes[0].nodeValue;
		// new_session.original_text = text;
		// new_session.pure_text = cleanString(text);
		// new_session.formatted_text = new_session.pure_text.split("");
		// new_session.update();
	// },'xml')
// 	
	// new_session.jump_size = 100;
	// new_session.text_colors = [];
	// new_session.active_color = 0;
	// new_session.els_list = {};
// 	
	// new_session.updatePureText = function(){
		// var updated_pure_text = formatText(insertLineBreaks(this.pure_text, this.jump_size), this.formatted_text);
		// updated_pure_text = updated_pure_text.replace(/<a name=text/g,'<a name=pure_text');
		// $(PURE_TEXT_ID)[0].innerHTML = updated_pure_text;
	// }
// 	
	// new_session.updateOriginalText = function(){
		// var updated_original_text = formatText(this.original_text, this.formatted_text);
		// updated_original_text = updated_original_text.replace(/<a name=text/g,'<a name=original_text');
		// $(ORIGINAL_TEXT_ID)[0].innerHTML = updated_original_text;
	// }
// 	
	// new_session.colorEls = function(color, els){
		// var n = els.word.length
		// this.formatted_text[els.index] = '<a name=text' + els.index + ">" + this.formatted_text[els.index] + "</a>"
		// for (i=0; i < n; i++){
			// var current_letter_pos = els.index+i*(Math.abs(els.jump));
			// //this.text_colors[current_letter_pos] = color;
			// //this.formatted_text[current_letter_pos] = '<span style="background-color:' + COLORS_ARRAY[color] + '">' + this.formatted_text[current_letter_pos] + '</span>';
			// this.formatted_text[current_letter_pos] = '<span style="background-color:' + get_color(color) + '">' + this.formatted_text[current_letter_pos] + '</span>';
		// }
	// }
	// new_session.addWordToList = function(word, value, length){
		// //var color = COLORS_ARRAY[value];
		// var color = get_color(value);
		// var o = new Option(word + " (" + length + ")", value);
		// o.style.backgroundColor = color;
		// o.onclick = function(){
			// BIBLE_MAIN.active_session.fillElsList(word);
		// }
		// $(WORD_LIST_ID)[0].add(o);
	// }
	// new_session.findAndColorWord = function(word){
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
	// new_session.addEls = function(word, els_array){
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
	// new_session.changePureTextJumpSize = function(new_jump_size){
		// this.jump_size = new_jump_size;
		// this.updatePureText();
	// }
// 
	// new_session.fillElsList = function(word){
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
	// new_session.update = function(){
		// this.updatePureText();
		// this.updateOriginalText();
	// }	
// 	
	// return new_session
// }

function loadTextFromFile(filename){
	var result;
	$.get(filename, function(data){
		result = data;
	},'text')
	return result;	
}

var init = function() {
	BIBLE_MAIN.sessions = [];
		
	BIBLE_MAIN.findWord = function(words){
		this.active_session.postMessage({'type': 'find_words', 'words': words});
		// words = words.replace(/\s+/g," ");
		// var words_array = words.split(" ");
		// for (var i=0; i<words_array.length; i++){
			// word = words_array[i];
			// //this.active_session.findAndColorWord(word);
			// this.els_find_worker.postMessage({'type': 'findEls', 'text': this.active_session.pure_text, 'str':word});
		// }
	}
	BIBLE_MAIN.addWordToList = function(word, color, length){
		var o = new Option(word + " (" + length + ")", word);
		o.style.backgroundColor = color;
		o.onclick = function(){
			BIBLE_MAIN.fillElsListFor(word);
		}
		$(WORD_LIST_ID)[0].add(o);
	}
	
	BIBLE_MAIN.fillElsListFor = function(word){
		this.active_session.postMessage({'type': 'fill_els_list_for', 'word': word});
	}
	
	BIBLE_MAIN.fillElsList = function(els_array){
		var list = document.createElement("select");
		// var els_array = this.els_list[word];
		
		list.id = ELS_LIST_ID.replace("#","");
		list.size = 6;
		
		for (i=0; i<els_array.length; i++){
			var els = els_array[i];
			var option = new Option("(" + els.index + ", " + els.jump + ")", i);
			option.jump_to_location = els.index;
			option.jump_size = Math.abs(els.jump);
			option.onclick = function(){
				BIBLE_MAIN.jumpToWord(this.jump_to_location, this.jump_size);
			}
			list.add(option);			
		}
		$(LISTS_ID)[0].removeChild($(ELS_LIST_ID)[0]);
		$(LISTS_ID)[0].appendChild(list);
	}
	BIBLE_MAIN.jumpToWord = function (word_location, word_jump_size){
		message = {'type': 'goto_word', 'word_location': word_location};
		if (word_jump_size > 5){ //otherwise it looks bad
			message.word_jump_size = word_jump_size;
			// BIBLE_MAIN.changePureTextJumpSize(word_jump_size);
		}
		this.active_session.postMessage(message);
	}
	
	BIBLE_MAIN.start_first_session = function(text){
		var first_session = newSession(text);
		//var first_session = newSession(heb_lorem_ipsum_text);
		//var first_session = newSession(genesis_text);
		//var first_session = newSession(torah_text);
		this.active_session = first_session;
		this.sessions.push(this.active_session);
		//this.active_session.update();
	}
	
	BIBLE_MAIN.start_new_session = function(text_filename){
		var session = new Worker('session.js');
		session.onmessage = function(event){
			switch (event.data.type){
				case 'message':
					console.log("Session " + text_filename + " says: " + event.data.message);
					break;
				case 'update_pure_text':
					console.log("Session " + text_filename + " asks for pure text update");
					$(PURE_TEXT_ID)[0].innerHTML = event.data.pure_text;
					// BIBLE_MAIN.slowlyUpdateText($(PURE_TEXT_ID)[0], event.data.pure_text);
					console.log("update done");
					break;
				case 'update_original_text':
					console.log("Session " + text_filename + " asks for original text update");
					$(ORIGINAL_TEXT_ID)[0].innerHTML = event.data.original_text;
					// BIBLE_MAIN.slowlyUpdateText($(ORIGINAL_TEXT_ID)[0], event.data.original_text);
					// $(ORIGINAL_TEXT_ID)[0].appendChild(document.createTextNode(event.data.original_text));

					console.log("update done");
					break;	
				case 'add_word_to_list':
					BIBLE_MAIN.addWordToList(event.data.word, event.data.color, event.data.length);
					break;
				case 'fill_els_list':
					BIBLE_MAIN.fillElsList(event.data.els_array);
					break;	
				case 'goto_word':
					window.location = "#original_text" + event.data.word_location;
					window.location = "#pure_text" + event.data.word_location;
					window.location = "#";		
					break;
			}
		}
		this.active_session = session;
		this.sessions.push(session);
		
		$.get(text_filename, function(data){
			text_node = $(data).find("text")[0];
			text_node.normalize(); 
			text = text_node.childNodes[0].nodeValue;
			session.postMessage({'type': 'init', 'text_filename': text});
		},'xml')
	}
	
	BIBLE_MAIN.changePureTextJumpSize = function(new_jump_size){
		this.active_session.postMessage({'type': 'change_jump_size', 'new_jump_size': new_jump_size});	
	}
	BIBLE_MAIN.slowlyUpdateText = function(textbox, text_chunks){
		textbox.innerHTML = "";
		for (i = 0; i < text_chunks.length; i++){
			setTimeout(function(x){
				return function(){
					textbox.innerHTML += text_chunks[x];
				}
			}(i), 0);
		}
	}
	
	BIBLE_MAIN.els_find_worker = new Worker('els_find_worker.js');  
	BIBLE_MAIN.els_find_worker.onmessage = function(event) {  
  		if (event.data.type == 'findElsResult'){
  			BIBLE_MAIN.active_session.addEls(event.data.word, event.data.result);
  		}
	};
	//var alice_text = loadTextFromFile("alice.txt");
	//var alice_text = $("#alice_text")[0].innerHTML;
//	$.get("alice.txt", function(data){
//		BIBLE_MAIN.texts.alice = data; 
//		BIBLE_MAIN.start_first_session(BIBLE_MAIN.texts.alice);	
//		},'text');
	 
	//BIBLE_MAIN.active_session.findAndColorWord('where');
	//BIBLE_MAIN.active_session.findAndColorWord('when');
	//BIBLE_MAIN.start_first_session("maavar.xml");
	//BIBLE_MAIN.start_first_session("genesis.xml");
	BIBLE_MAIN.start_new_session("genesis.xml");
}

window.onload = init
