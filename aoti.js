/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var num = str.trim();
    if(isNaN(parseInt(num.split(" ")[0]))){
        return 0;
    }else{
        num = num.split(/[^\d-.-/+]/g)[0];  
        if(isNaN(Number(num))){
            return 0;
        }
        if(Math.abs(num) >= 2147483648){
            if(Math.sign(num) == -1){
                return Math.sign(num)*2147483648;   
            }else{
                return Math.sign(num)*2147483647;
            }
        }else{
           if(Math.sign(num) == 1){
             return Math.abs(num);
           }else{
               return Number(-1*Math.abs(num));
           }
           
        }
    }
};
