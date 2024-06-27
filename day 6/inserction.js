
function inserctionSort(arr, val) {
    for (let ind = arr.length - 1; ind >= 0; ind--) {
        if (arr[ind] > val) {
            arr[ind + 1] = arr[ind]
        } else {
            arr[ind + 1] = val
            return arr
        }
    }
    arr[0] = val
    return arr
}
let arr = []
inserctionSort(arr, 3)
console.log(...arr)
inserctionSort(arr, 1)
console.log(...arr)
inserctionSort(arr, 2)
console.log(...arr)
inserctionSort(arr, 4)
console.log(...arr)
inserctionSort(arr, 5)
console.log(...arr)
inserctionSort(arr, 6)
console.log(...arr)
inserctionSort(arr, 7)
console.log(...arr)

