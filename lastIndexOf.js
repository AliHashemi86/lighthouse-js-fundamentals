function lastIndexOf(array, value) {
  let output = -1
  for (let i=0; i < array.length; i++) {
    if (array[i] === value) 
    output = i
  };
  return output
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 3);

//Version 2:

function lastIndexOf(array, value) {
  for (var i = array.length; i > 0; i--) {
    if (array[i - 1] === value)
      return i - 1;
  }
  return -1;
}
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 3);


