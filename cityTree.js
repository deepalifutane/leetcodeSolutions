

function solution(A, B, N){
  
  var map = {};
  var j=0;
  for(var i=0; i<A.length; i++){
    map[j] = [A[i],B[i]];
    j++
  }
  console.log(map)
  return j;
}

console.log(solution([1,2,3,3],[2,3,1,4],4))
