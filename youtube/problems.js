function sum(num) {
    let res = 0
    for (let i = 0; i < num.length; i++) {
        res += num[i]
    }
    return res
}

let num = [1, 2, 3, 4, 10, 11]
console.log(sum(num))