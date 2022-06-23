/**
 * Promise
 * - Sync: Đồng bộ. Code chạy theo thứ tự trên dưới
 * - Async: Bất đồng bộ. setTimeout, setInterval, fetch, XMLHttpRequest, reading file
 * - Nỗi đau
 * - Lý thuyết, cách hoạt động promise
 * - Thực hành, ví dụ
 */

// Sync
// console.log(1);
// console.log(2);

// Async
// setTimeout(function () {
//     console.log("First");
// }, 1000);
// console.log("Second");

// Callback hell or Pyramid of doom
// setTimeout(function () {
//     let count = 1;
//     console.log(count);
//     count++;
//     setTimeout(function () {
//         console.log(count);
//         count++;
//         setTimeout(function () {
//             console.log(count);
//             count++;
//             setTimeout(function () {
//                 console.log(count);
//                 count++;
//                 setTimeout(function () {
//                     console.log(count);
//                     setTimeout(function () {
//                         console.log("DONE");
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

// promise
/**
 * - Step 1: Creat a promise obj
 * - Step 2: Executor
 */

/**
 * 3 trạng thái của promíe obj:
 * - 1: Pending
 * - 2: Fullfill
 * - 3: Reject
 */

// var promise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         // Logic
//         // Success: resolve
//         // Fail: reject
//         // resolve()
//         // reject()

//         // let data = {name: "Long", age: 30, job: "Guide"};
//         let data = {};
//         if (Object.values(data).length > 0) {
//             resolve(data)
//         } else {
//             reject("Empty!")
//         }
//     }
// );

// promise
//     .then(function (data) {
//         console.log("Successfully load: ", data)
//     })
//     .catch(function (err) {
//         console.log("Error: ", err)
//     })
//     .finally(function () {
//         console.log("Done")
//     })

// // Promise chain. How promise works?
// var promiseChain = new Promise(
//     function (resolve, reject) {
//         resolve()
//     }
// )

// promiseChain
//     .then(function () {
//         return new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve(["Hello anh em"])
//             }, 3000)
//         })
//     })
//     .then(function (data) {
//         console.log(data)
//     })
//     .catch(function () {

//     })
//     .finally(function () {
//         console.log("Done")
//     })

// Handle callback hell exemple

// function sleep(ms, count) {
//     return new Promise(function (resolve) {
//         setTimeout(function () {
//             count++
//             resolve(count);
//         }, ms)
//     })
// }

// sleep(100, 0)
//     .then(function (data) {
//         console.log(data);
//         return sleep(1000, data);
//     })
//     .then(function (data) {
//         console.log(data);
//         return sleep(1000, data)
//     })
//     .then(function (data) {
//         console.log(data);
//         return sleep(1000, data)
//     })
//     .then(function (data) {
//         console.log(data);
//         return new Promise(function(resolve, reject) {
//             reject("Error")
//         })
//     })
//     .then(function(data) {
//         console.log(data)
//         return(sleep(1000, data))
//     })
//     .catch(function(err) {
//         console.log(err)
//     })


// 1.Promise.resolve
// 2.Promise.reject
// 3.Promise.all

// var promise = new Promise(function(resolve, reject) {
//     resolve("Ok!")
//     reject("Warning!")
// })

// var promise = Promise.resolve("DONE!")

// var promise = Promise.reject("WARNING!")

// promise
// .then(function(result) {
//     console.log("Result", result)
// })
// .catch(function(err) {
//     console.log("Err", err)
// })

var promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([1])
    }, 1000)
})

var promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([2, 3])
    }, 3000)
})

Promise.all([promise1, promise2])
.then(function(result) {
    var result1 = result[0];
    var result2 = result[1];

    console.log(result1.concat(result2))
})