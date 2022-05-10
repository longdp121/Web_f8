// Ham - fucntion

/*
1. Ham?
- Moi khoi code
- Lam mot nhiem vu cu the

2. Loai ham
- Built-in
- Tu dinh nghia

3. Tinh chat
- Khong thuc thi khi dinh nghia
- thuc thi khi duoc goi
- Co the nhan tham so
- Co the tra ve mot gia tri
*/

function showDialog() {
    // code here
    console.log('function:', 'xin chao')
}

showDialog()

/*
1. Tham so
- Dinh nghia
- Kieu du lieu
- Tinh private
- 1 tham so
- Nhieu tham so

2. Truyen tham so
- 1 tham so
- Nhieu tham so

3. Arguments
- Doi tuong argument
- Gioi thieu for of
*/

function writeLog(message) {
    console.log(message)
}

writeLog('Hello anh em')
writeLog(999)
writeLog(['helo', 'anh', 'em'])
writeLog({
    age: 90,
    add: 'Hanoi'
})

function funcMultiArg(name, value) {
    var objectInsideFunc = {
        name: value
    };
    console.log('This is object inside and function', objectInsideFunc)
}

funcMultiArg('age', 91, 'ok')
funcMultiArg('name')

function printLog() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}

printLog('Cho', 'meo', 'lon', 'ga')


