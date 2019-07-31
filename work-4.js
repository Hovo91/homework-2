function invertObject(object = {}, result = {}) {
  if (object === null || typeof object !== 'object') {
    return 'Insert object';
    }
  let array = [];
  for (var key in object) {
    if (result.hasOwnProperty(object[key])) {
      if (!Array.isArray(result[object[key]])) {
        array.push(result[object[key]]);
        result[object[key]] = array; 
      }   
      result[object[key]].push(key);   
      } else {
        result[object[key]] = key;
      }
  }
  return result;
}

console.log(invertObject({ a: '1', b: '2', c: '2', d: '2' }));
