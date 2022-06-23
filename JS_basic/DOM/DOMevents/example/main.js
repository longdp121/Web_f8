// Input

// var inputElement = document.querySelector("input[type='text']");

// inputElement.onchange = function (e) {
//     console.log(e.target.value)
// }

// inputElement.oninput = (e) => {
//     console.log(e.target.value)
// }

// var checkboxElement = document.querySelector("input[type='checkbox']");

// checkboxElement.onchange = function (e) {
//     let checkedStatus = e.target.checked;
//     if (checkedStatus === true) {
//         console.log("Đã bấm chọn")
//     } else {
//         console.log("Bỏ chọn")
//     }
// }

// var selectElement = document.querySelector("select");

// selectElement.onchange = function (e) {
//     console.log(e.target.value)
// }

//Key up/down

// inputElement.onkeydown = function (e) {
//     console.log(e.which)

//     switch (e.which) {
//         case 27:
//             console.log("Exit");
//             break
//     }
// }

// document.onkeydown = function(e) {
//     console.log(e.which)
//     switch (e.which) {
//         case 13:
//             console.log("GỬI TIN NHẮN");
//             break
//         case 27:
//             console.log("THOÁT WEB");
//             break
//     }
// }

var inputElement = document.querySelector("input[name='chat-content']");
var sendBtn = document.querySelector("button[name='send-btn']");

inputElement.onfocus = function () {
    document.onkeydown = function (e) {
        switch (e.which) {
            case 13:
                console.log(inputElement.value)
                inputElement.value = "";
                break
            case 27:
                inputElement.value = "";
                inputElement.blur();
                break
        }

    }
}

sendBtn.onclick = function() {
    console.log(inputElement.value);
    inputElement.value = "";
    inputElement.focus()
}
