function moveZeros(arr) {
  let result = [];
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];

    if (item === 0) {
      temp.push(item);
    } else {
      result.push(item);
    }
  }

  return result.concat(temp);
}
