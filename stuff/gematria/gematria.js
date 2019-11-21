var PRIMARY_WORD_ID = "#primary_word";
var SECONDARY_WORD_ID = "#secondary_word";
var GEMATRIC_DIFFERENCE_ID = "#gematric_difference";
var WORDS_DIV = "#words";


var translateTable = {
    'א': 1,
    'ב': 2,
    'ג': 3,
    'ד': 4,
    'ה': 5,
    'ו': 6,
    'ז': 7,
    'ח': 8,
    'ט': 9,
    'י': 10,
    'כ': 20,
    'ך': 20,
    'ל': 30,
    'מ': 40,
    'ם': 40,
    'נ': 50,
    'ן': 50,
    'ס': 60,
    'ע': 70,
    'פ': 80,
    'ף': 80,
    'צ': 90,
    'ץ': 90,
    'ק': 100,
    'ר': 200,
    'ש': 300,
    'ת': 400
};

var computeValue = function(word){
  var letters = word.split("");
  var sum = 0;
  for (var i=0; i<letters.length; i++){
    if (translateTable[letters[i]]){
      sum += translateTable[letters[i]];
    }
  }
  return sum;
}

var computeDifference = function(){
  var val_1 = computeValue($(PRIMARY_WORD_ID)[0].value);
  var val_2 = computeValue($(SECONDARY_WORD_ID)[0].value);
  return Math.abs(val_1 - val_2);
}

var setNewDifference = function(){
  $(GEMATRIC_DIFFERENCE_ID)[0].innerHTML = computeDifference();
  fillWordList();
}

var fillWordList = function(){
  var word_list_div = $(WORDS_DIV)[0]
  var list = document.createElement("ul");
  var words = dic[computeDifference()];
  if (word_list_div.children.length > 0){
    word_list_div.removeChild(word_list_div.lastChild);
  }
    
  if (words){
    for (var i=0; i<words.length; i++){
      var item = document.createElement("li");
      item.innerHTML = words[i];
      list.appendChild(item);
    }
 
    word_list_div.appendChild(list);
  }
}

var init = function(){
  setNewDifference();
}

window.onload = init