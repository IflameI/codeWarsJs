function countBits(int) {
  const binary = int.toString(2).split('');
  let count = 0;

  for (let i = 0; i < binary.length; i++) {
    let item = binary[i];
    if (item == 1) {
      count++;
    }
  }
  return count;
}
