function deleteFirstElement(array = [], i = 1, newArray = []) {
  if (array.length === 0 || array.length === 1) {
    return newArray;
  }
  if (i < array.length) {
    newArray.push(array[i]);
    return deleteFirstElement(array, ++i, newArray);
  }
  return newArray;
}

console.log(deleteFirstElement([6, 78, 'n', 0, 1]));
