let secondNumber = "";
function howManyHundreds(num){

  let secondNumber = num / 100;

  let finalNumber = Math.floor(secondNumber);

  return finalNumber;
}
console.log(howManyHundreds(1234))

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
