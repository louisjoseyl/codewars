// function highAndLow(numbers){
//  let num = numbers.split(" ").map(i => Number(i)).sort((a,b)=> b-a)
// if(num.length > 1){
//   let num1 = num.pop() 
//   let num2 = num.shift()

//   return `${num2} ${num1}`

// }else{
//   return `${num} ${num}`
// }

// }

console.log(highAndLow("1"))





function highAndLow(numbers){
  let num = numbers.split(' ')
  return `${Math.max(num)} ${Math.min(num)}`
}