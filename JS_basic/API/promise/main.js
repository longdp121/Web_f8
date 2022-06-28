// Promise
/**
 * - Sync
 * - Async
 */

// Sync - Đồng bộ - chạy theo thứ tự trên dưới

console.log("a");
console.log("b");

// Async - Bất đồng bộ - Viết trước nhưng không chạy trước
/**
 * 1. SetTimeout
 * 2. SetInterval
 * 3. fetch
 * 4. XMLHttpRequest
 * 5. Dọc file
 */

// setTimeout(function () {
//     console.log("First");
// }, 1000);
// console.log("Second");

// Callback hell

// setTimeout(function () {
//     console.log(1);
//     setTimeout(function () {
//         console.log(2);
//         setTimeout(function () {
//             console.log(3);
//             setTimeout(function () {
//                 console.log(4);
//                 setTimeout(function () {
//                     console.log(5);
//                     setTimeout(function () {
//                         console.log("Done");
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// My example

// let data = [
//     { id: 1, course: "JS" },
//     { id: 2, course: "Python" },
//     { id: 3, course: "PHP" }
// ]

// let data = [];

// var promiseExample = new Promise(
//     function (resolve, reject) {
//         if (data.length > 0) {
//             resolve(data)
//         } else {
//             reject("Data is empty")
//         }
//     }
// )

// promiseExample
//     .then(function (courses) {
//         courses.forEach(function (item) {
//             let content = `${item.course} has id number: ${item.id}`;
//             console.log(content)
//         })
//     })
//     .catch(function (err) {
//         console.log(err)
//     })
//     .finally(function () {
//         console.log("Redner done")
//     })

// Promise

// var promise = new Promise(
//   // Executor
//   function (resolve, reject) {
//     // Logic
//     // Thành công => resolve()
//     // Thất bại => reject()

//     resolve();
//     // reject()
//   }
// );

// promise
//   .then(function () {
//     return new Promise(function (resolve) {
//       setTimeout(function() {
//         resolve([1, 2, 3])
//       }, 3000);
//     });
//   })
//   .then(function (data) {
//     console.log(data);
//     return 2;
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function () {
//     console.log("Fail");
//   })
//   .finally(function () {
//     console.log("Done");
//   });

  // Example handle callback hell

//   function sleep(ms) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, ms)
//         }
//     )
//   }

//   sleep(1000)
//   .then(function() {
//     console.log(1)
//     return sleep(1000)
//   })
//   .then(function() {
//     console.log(2);
//     return new Promise(function(resolve, reject) {
//         reject("Fail");
//     });
//   })
//   .then(function() {
//     console.log(3);
//     return sleep(1000)
//   })
//   .catch(function(err) {
//     console.log(err)
//   })

// Promise.resolve
var promiseResolve = Promise.resolve("ok");

promiseResolve.then(function(result) {
    console.log(result)
})

// Promise.reject
var promiseReject = Promise.reject("Fail");

promiseReject.catch(function(err) {
    console.log(err)
})

// Promise.all
var promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve([1])
    }, 1000)
})

var promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve([2, 3, 4])
    }, 2000)
})

var promiseThree = Promise.reject("Fail");

Promise.all([promiseOne, promiseTwo, promiseThree])
.then(function(result) {
    let resultOne = result[0];
    let resultTwo = result[1];
    console.log(resultOne.concat(resultTwo))
})
.catch(function(err) {
    console.log("Err: ", err)
})