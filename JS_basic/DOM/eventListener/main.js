// Event listener

// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe/Hủy bỏ lắng nghe

var btn = document.getElementById("btn");
console.log(btn)

//Dom event

btn.onclick = function() {
    //Handle multiple jobs
    // console.log("Job 1");
    // console.log("Job 2");
    // alert("Job 3")
}

setTimeout(function() {
    //Remove listener event after 5s
    // btn.onclick = function() {}
}, 5000)

//Event listener

function jobOne() {
    console.log("Job 1")
}

function jobTwo() {
    console.log("Job 2")
}

btn.addEventListener("click", jobOne);
btn.addEventListener("click", jobTwo);

setTimeout(function() {
    btn.removeEventListener("click", jobOne)
}, 3000)