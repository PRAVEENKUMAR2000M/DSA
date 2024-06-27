// for (let num = 1; num <= 10; num++){
//     console.log(num)
// }


function recursive(n, curr) {
    if (n < curr) {

        return
    } else {
        console.log(curr)
        recursive(n, curr+1)
    }
}
recursive(10, 1)

