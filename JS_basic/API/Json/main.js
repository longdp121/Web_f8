//JSON
//1. Là một định dạng dữ liệu (dạng chuỗi). Chuỗi json luôn bao bằng nháy đơn, các dữ liệu trong json luôn bao bằng nháy kép
//2. JavaScript Object Notation
//3. JSON: Number, String, bool, Null, array, obj

//Mã hóa và giải mã: Encode and Decode
//Stringify ==> Từ js type sang JSON
//Parse ==> Từ JSOn sang js type

//Parse JSON string thành dữ liệu JS. Luôn dùng nháy đơn ngoài cùng
var jsonArr = '["Python", "JS", "PHP"]'
var jsonObj = '{"name":"Long", "age":30}';

console.log(JSON.parse(jsonArr));
console.log(JSON.parse(jsonObj));


//Format dữ liệu JS thành chuỗi JSON
var myArr = ["JS", "Python", "Ruby", "C#", '"'];
var myObj = {
    name: "Long",
    age: 30,
    job: "Guide",
    address: "Hanoi, Vietnam"
};

console.log(JSON.stringify(myArr));
console.log(JSON.stringify(myObj));
