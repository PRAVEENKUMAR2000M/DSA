
// function linearSerach(value, search) {

//     for (let ind = 0; ind < value.length; ind++){
//         if (value[ind] == search) {
//             return ind
//         }
//     }
//     return -1

// }

// console.log(linearSerach([55, 66, 12, 69, 78, 32, 34, 51, 43], 34))
// console.log(linearSerach([55, 66, 12, 69, 78, 32, 34, 51, 43], 1))



function binarySearch(arr, searchValue) {
    let start = 0;
    let end = arr.length -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        console.log(start, end, mid, arr[mid], searchValue)
        if (arr[mid] == searchValue) {
            return mid
        }
        if (arr[mid] < searchValue) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }

    }
    return -1
}

console.log(binarySearch([10, 12, 16, 18, 22, 32, 34], 34))