function anagrams(word, words) {
  const wordChange = (word) => {
    return word.toLowerCase().split('').sort().join('');
  };
  const initWordChange = wordChange(word);
  const result = [];
  for (let i = 0; i < words.length; i++) {
    let item = wordChange(words[i]);
    if (item === initWordChange) {
      result.push(words[i]);
    }
  }
  return result;
}
