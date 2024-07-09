function solution(str, ending){
  if(str.at(-1) === ending.at(-1)) return true
  else return false

}

console.log(solution('true','false'))