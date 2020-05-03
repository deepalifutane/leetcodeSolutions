

function sum(A){
  var max = -1;
  
  if(!Array.isArray(A)){
      return -1;
  }
  A.sort();
  if(A.length <= 200000 && A[A.length-1]<= 1000000000 && A[0]>=1){
  var pairs = {};
  for(var i=0; i<A.length; i++){
    var tmp = Math.trunc(A[i]/10) + A[i]%10;
    if(pairs[tmp]){
      pairs[tmp].push(A[i])
    }else{
      pairs[tmp] = [A[i]];
    }
  }
  
  for(var key in pairs){
    if(pairs[key].length >= 2){
      var tmpPair = pairs[key];
      tmpPair.sort();
      var sumPair = parseInt(tmpPair[tmpPair.length-1])+parseInt(tmpPair[tmpPair.length-2]);
      if(max < sumPair){
        max = sumPair;
      }
    }
  }
  }
  
  return max;
}

console.log(sum([51,43,32]))
console.log(sum([51,71,17,42]))
console.log(sum([60,33, 42]))
console.log(sum([60,33, 42, -1]))
console.log(sum([]))
