var arr = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c', "#"]

console.log([...(new Set(arr))])

//De quy la gi
//1. Xac dinh diem dung
//2. Xac dinh logic => Tao ra diem dung

//CountDown func
function countDown(num) {
    if (num >= 0) {
        console.log(num)
        return countDown(num - 1)
    }
    return num
}

countDown(5)


//loop func
function loop(start, end, cb) {
    if (start < end) {
        cb(start)
        return loop(start + 1, end, cb)
    }
}

var array = ['JS', 'PHP', 'Ruby', 'Python']

loop(0, array.length, function(index) {
    console.log(array[index])
})


//Tinh giai thua
function giaiThua(num) {
    var output = 1;
    for (var i = num; i > 0; i--) {
        output *= i
    }
    console.log(output)
    return output
}

giaiThua(6)


//Tinh giai thua bang de quy
function giaiThuaDeQuy(num) {
    if (num > 0) {
        return num * giaiThuaDeQuy(num - 1)
    }
    return 1
}

console.log(giaiThuaDeQuy(6))



