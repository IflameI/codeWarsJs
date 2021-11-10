function duplicateCount(text) {
  let textToArray = text.toUpperCase().split('');
  let tempArr = [];
  for (let i = 0; i < textToArray.length; i++) {
    if (textToArray.filter((x) => x === textToArray[i]).length >= 2) {
      tempArr.push(textToArray[i]);
    }
  }
  const uniqElements = Array.from(new Set(tempArr));
  return uniqElements.length;
}
