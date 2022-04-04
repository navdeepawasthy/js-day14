// function callPromise(alphabet) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(alphabet)
//         }, 1000)
//     })
// }

// callPromise("A").then((res) => {
//     console.log(res)
//     callPromise("B").then((res) => {
//         console.log(res)
//         callPromise("C").then((res) => {
//             console.log(res)
//         })
//     })
// })

// -----------promise chaining
// function callPromise(alphabet) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(alphabet)
//             resolve('promise done')
//         }, 1000)
//     })
// }

// // callPromise("A").then(() => { return callPromise("B") }).then(() => { return callPromise("C") }).then(() => { return callPromise("D") })

// callPromise("A").then(() => callPromise("B"))
//     .then(() => callPromise("C"))
//     .then(() => callPromise("D"))

// const obj = {
//     message: 'Hello, World',
//     getMessage() {
//         const message = 'Hello, Earth'
//         return this.message
//     }
// }

// let result = obj.getMessage()
// console.log(result);
// obj.getMessage()
// let obj = {
//     who: 'World',
//     greet: function () {
//         console.log(`Hello, ${this.who}`)
//     },
//     farewell: () => {
//         console.log(`Goodbye, ${this.who}`)
//     }
// }