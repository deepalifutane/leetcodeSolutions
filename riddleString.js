
function randomChar() {
	var chars = "abcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	var rnum = Math.floor(Math.random() * chars.length);
	return chars.charAt(rnum);
	
}

function solution(riddle){
  
  if(riddle.length >= 1 && riddle.length <= 100000){
    var str = riddle.split("?");
    var riddleNew = "";
    for(var i=0; i<str.length; i++){
      var char = randomChar();
      var random = false;
      while(random === false){
          if(str[i].charAt(str[i].length-1) == char && str[i+1].charAt(0) == char){
            char = randomChar();
          }else{
            random = true;
          }
      }      
      riddleNew += str[i] + char;
    }
    return riddleNew
  }
  
}

console.log(solution("ab?ac?"))
console.log(solution("rd?e?wg??"))
console.log(solution("???????"))
