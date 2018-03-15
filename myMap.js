var words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));

function map (arr, func) {
  let newarr = [];

  arr.forEach (element => {
    newarr.push (func (element));
  });
  return newarr;
}

