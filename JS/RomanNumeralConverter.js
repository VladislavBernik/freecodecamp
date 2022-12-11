function convertToRoman(num) {
  var ref = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];
  var res = [];
  ref.forEach(function (p) {
    while (num >= p[1]) {
      res.push(p[0]);
      num -= p[1];
    }
  });
  return res.join("");
}

console.log(convertToRoman(2));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(44));
console.log(convertToRoman(68));
console.log(convertToRoman(400));
console.log(convertToRoman(3999));
