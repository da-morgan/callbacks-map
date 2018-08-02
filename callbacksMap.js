var words = ["ground", "control", "to", "major", "tom"];

function map(arr, fn){
  var newArr = [];
  arr.forEach(function(item){
    newArr.push(fn(item));
  });
  return newArr;
}

map(words, function(word) {

  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});