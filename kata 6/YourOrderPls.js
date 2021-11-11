function order(words) {
  let arr = words.split(' ');
  let result = [...arr];
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    for (let j = 0; j < item.length; j++) {
      let internalItem = item[j];
      if (!isNaN(internalItem)) {
        +internalItem;
        result.splice(internalItem - 1, 1, item);
      }
    }
  }
  return result.join(' ');
}
