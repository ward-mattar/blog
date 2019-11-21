var WORD_ID = "#word";
var IS_PALINDROM_ID = "#is_palindrom"
var SUGGESTIONS_ID = "#suggestions"
// var SECONDARY_WORD_ID = "#secondary_word";
// var GEMATRIC_DIFFERENCE_ID = "#gematric_difference";
// var WORDS_DIV = "#words";
function cleanHebrewTerminatingLetters(str){
	return str.replace(/ץ/g,"צ").replace(/ן/g,"נ").replace(/ם/g,"מ").replace(/ך/g,"כ").replace(/ף/g,"פ")
}

var isPalindrom = function(word, short_allowed){
  var clean_word = cleanHebrewTerminatingLetters(word.replace(/ /g, ''));
  if (!short_allowed && clean_word.length <= 1){
    return false
  }
  var letters = clean_word.split("");
  var i = 0;
  var j = 0;
  for (i=0, j=letters.length-1; i < j; i++, j--){
    if (clean_word[i] != clean_word[j]){
      return false;
    }
  }
  return true;
}


var reverse = function(s){
    return s.split("").reverse().join("");
}

var palindromize = function(word){
  var clean_word = cleanHebrewTerminatingLetters(word.replace(/ /g, ''));
  var i;
  var results = new Array();
  for (i = 0; i < clean_word.length; i++){
    var temp_word = clean_word.substring(i, clean_word.length)
    if (isPalindrom(temp_word, true)){
      results.push(clean_word + reverse(clean_word.substring(0,i)))
    }
  }
  return results;
}

var checkPalindrom = function(){
  var word = $(WORD_ID)[0].value
  if (isPalindrom(word, false)){
    $(IS_PALINDROM_ID)[0].innerHTML = "פלינדרום!";
  }
  else{
    $(IS_PALINDROM_ID)[0].innerHTML = "";
  }
  
  suggestions = palindromize(word);
  
  var word_list_div = $(SUGGESTIONS_ID)[0]
  var list = document.createElement("ul");
  if (word_list_div.children.length > 0){
    word_list_div.removeChild(word_list_div.lastChild);
  }
  
  for (i=0; i<suggestions.length; i++){
      var item = document.createElement("li");
      item.innerHTML = suggestions[i];
      list.appendChild(item);
  }
  word_list_div.appendChild(list);
}
// var computeDifference = function(){
//   var val_1 = computeValue($(PRIMARY_WORD_ID)[0].value);
//   var val_2 = computeValue($(SECONDARY_WORD_ID)[0].value);
//   return Math.abs(val_1 - val_2);
// }
// 
// var setNewDifference = function(){
//   $(GEMATRIC_DIFFERENCE_ID)[0].innerHTML = computeDifference();
//   fillWordList();
// }
// 
// var fillWordList = function(){
//   var word_list_div = $(WORDS_DIV)[0]
//   var list = document.createElement("ul");
//   var words = dic[computeDifference()];
//   if (word_list_div.children.length > 0){
//     word_list_div.removeChild(word_list_div.lastChild);
//   }
//     
//   if (words){
//     for (var i=0; i<words.length; i++){
//       var item = document.createElement("li");
//       item.innerHTML = words[i];
//       list.appendChild(item);
//     }
//  
//     word_list_div.appendChild(list);
//   }
// }

var init = function(){
  
}

window.onload = init