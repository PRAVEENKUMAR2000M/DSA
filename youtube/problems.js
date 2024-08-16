// function sum(num) {
//     let res = 0
//     for (let i = 0; i < num.length; i++) {
//         res += num[i]
//     }
//     return res
// }

// let num = [1, 2, 3, 4, 10, 11]
// console.log(sum(num))


// function linearSearch(city, value) {
//     for (let i = 0; i < city.length; i++){
//         if (city[i] === value) {
//             return i
//         }
//     }
// }

// let city = ["salem", "coimbature", "tirupur", "erode", "namakkal"]
// console.log(linearSearch(city, "erode"))




let func = (city, value) => {
    for (let i = 0; i < city.length; i++){
        if (city[i] === value) {
            return i
        } else {
            continue
        }
    }
    return -1
}

let city = ["salem", "bangalore", "hosur", "coimbature", "erode"]

console.log(func(city, "erodee"))