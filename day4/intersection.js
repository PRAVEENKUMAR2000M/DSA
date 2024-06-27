// let n = Math.floor(Math.random() * 100)
// let m = Math.floor(Math.random() * 100)
// let arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100))
// let arr1 = Array.from({ length: m }, () => Math.floor(Math.random() * 100))
// console.log(arr)
// console.log(arr1)

// let obj = []
// let common = []

// for (let ind = 0; ind < n; ind++){
//     obj[arr[ind]] = true
// }
// for (let ind = 0; ind < m; ind++){
//     if (arr1[ind]) {
//         common[common.length] = arr1[ind]
//     }
// }

// console.log(common)


// let n = Math.floor(Math.random()*100)
// let arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100))


// let obj = {}
// for (let ind = 0; ind < n; ind++){
//     obj[arr[ind]] = true
// }

// console.log(Object.keys(obj))


function ceil(num) {
    return num - num % 1 + (num < 0 ? 0 : 1)
}

function floor(num) {
    return num - num % 1 + (num < 0 ? -1 : 0)
}
console.log(ceil(5.6))
console.log(floor(12.7))