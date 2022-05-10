/*
Ham dat trung ten
Bien trong ham
Ham trong ham
*/

// Ham trung ten
// function showMessage() {
//     console.log('M1');
// }

// function showMessage() {
//     console.log('M2');
// }

// showMessage();

// Khai bao bien trong ham
// function showMessage() {
//     var name = 'Dog';
//     console.log(name)
// }

// showMessage()

// ham trong ham
function showMessage() {
    function showSubMessage() {
        console.log('This come from sub func')
    }
    showSubMessage()
}

showMessage()