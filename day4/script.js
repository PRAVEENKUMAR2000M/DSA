// let sorting = [4, 2, 5, 3, 1]

// sorting.sort((a, b) => b - a)
// console.log(sorting)

// let prime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < prime.length; i++){
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// ? problem solving?


// let arr = [300, 445, 356, 34, 324, 4356, 56, 342]

// let temp = []

// for (let ind = 0; ind < arr.length; ind++){
//     let min = arr[0]
//     let minInd = 0
//     for (let ind1 = 0; ind1 < arr.length; ind1++){
//         if (min > arr[ind1]) {
//             min = arr[ind1]
//             minInd = ind1
//         }
//     }
//     temp.push(min)
//     arr[minInd] = +Infinity
// }
// console.log(...temp)


// let arr = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100))
// let res = arr.join(" ")
// console.log(res)


// function isPrime(num) {
//     for (let fact = 2; fact < num; fact++) {
//         if (num % fact == 0) {
//             // return false
//             console.log(num)
//         } else {
//             // return true
//             // console.log(fact)
//         }
//     }
// }

// console.log(isPrime(1))
// console.log(isPrime(2))
// console.log(isPrime(3))
// console.log(isPrime(4))
// console.log(isPrime(5))
// console.log(isPrime(6))
// console.log(isPrime(7))
// console.log(isPrime(8))
// console.log(isPrime(9))
// console.log(isPrime(10))
// console.log(isPrime(11))
// console.log(isPrime(12))
// console.log(isPrime(13))


//---------------------------------------------------------------------------------------------------------------

// function minAndmax(arr) {
//     if (arr.length == 0) {
//         return
//     }
//     let min = arr[0]
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         } else {
//             if (arr[i] > max) {
//                 max = arr[i]
//             }

//         }
//     }
//     return {
//         min, max
//     }
// }

// let arr = [12, 100, 152, 235, 654, 986, 45, 997]
// console.log(minAndmax(arr))


//-----------------------------------------------------------------------------------------------

// //sum of digits
// function sum(num) {
//     let sum = 0
//     while (num > 0) {
//         let rem = num % 10
//         num = Math.floor(num / 10)
//         sum += rem
//     }
//     return sum
// }

// console.log(sum(8012133432))

//---------------------------------------------------------------------------------------------

//fibonacci

// function fibonacci(n) {
//     let prev = 0
//     let curr = 1
//     if (n == 0) return 0
//     if (n == 1) return 1
//     for (let i = 2; i <= n; i++) {
//         curr = prev + curr
//         prev = curr - prev
//         // let next = prev + curr
//         //  prev = curr
//         //  curr = next
//     }
//     return curr
// }
// console.log(fibonacci(10))

//----------------------------------------------------------------------------------------------------------------

// function solve(n, value, sum, arr) {
//     if (sum == n) {
//         console.log(arr.join(" + "))
//         return
//     }
//     if (value > n) return
//     if (sum > n) return
//     solve(n, value + 1, sum + value, [...arr, value])
//     solve(n, value + 1, sum, [...arr])
// }

// function sumTill(n) {
//     solve(n, 1, 0, [])
// }
// sumTill(6)

//--------------------------------------------------------------------------------------------------------------------

let n = 5
for (let row = 0; row < n; row++){
    let arr = []
    for (let col = 0; col < n; col++){
        if (row == col || col >= n - 1 - row) arr.push("*")
        else arr.push(" ")
    }
    console.log(arr.join(" "))
}