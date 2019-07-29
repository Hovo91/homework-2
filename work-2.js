function flattensArray(array = [], newArray = []) {
  for (let i = 0; i < array.length; i++) {
    if(typeof array[i] === "object") {
      flattensArray(array[i], newArray);
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(flattensArray([1, [3, 4, [1, 2]], 10]));
