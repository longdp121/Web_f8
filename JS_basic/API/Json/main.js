// JSON là gì

// 1. Là định dạng dữ liệu
// 2. JavaScript Object Notation
// 3. JSON: Number, bool, null, array, obj, string

// Mã hóa - Giải mã
// Encode - Decode
// Stringify - Parse

// JSON => JS data | Parse
var json = '["JS", "PHP", "Python"]';
var jsonObj = '{"name":"Long","age":100}';
var jsonStr = '"My String must inside double quote"';

console.log(JSON.parse(json));
console.log(typeof JSON.parse(jsonObj), JSON.parse(jsonObj));
console.log(JSON.parse(jsonStr));

// JS data => JSON | Stringify
var jsData = ["JS", "PHP", "Python", "Ru'by"];
var jsObj = {
  name: "Long",
  age: 8000,
};

console.log(JSON.stringify(jsData));
console.log(typeof JSON.stringify(jsObj), JSON.stringify(jsObj));
