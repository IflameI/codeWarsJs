function humanReadable(seconds) {
  let hours = Math.floor(seconds / 60 / 60);
  let minutes = Math.floor(seconds / 60) - hours * 60;
  let secondsInt = seconds % 60;
  let formatted = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    secondsInt.toString().padStart(2, '0'),
  ].join(':');

  return formatted;
}
