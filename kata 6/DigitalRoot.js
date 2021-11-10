function digital_root(n) {
  let numberToArray = n.toString().split('');

  if (numberToArray.length === 1) {
    return n;
  }

  let sum = numberToArray.reduce(function (prev, current) {
    return parseInt(prev) + parseInt(current);
  });

  return digital_root(sum);
}
