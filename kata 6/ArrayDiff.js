function arrayDiff(a, b) {
  let result = a.filter(function (number) {
    return !b.includes(number);
  });
  return result;
}
