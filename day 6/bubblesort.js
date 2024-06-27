// function bubbleSort(arr) {
//     console.log(...arr)
//     for (let itr = 0; itr < arr.length; itr++) {
//         for (let ind = 0; ind < arr.length - 1; ind++) {
//             if (arr[ind] > arr[ind + 1]) {
//                 let temp = arr[ind]
//                 arr[ind] = arr[ind + 1]
//                 arr[ind + 1] = temp
//             }
//         }
//     }
//     console.log(...arr)
// }
// bubbleSort([5, 4, 3, 2, 1])




function bubbleSort(arr) {
    let swapped = false;
    let counter = 0;
    do {
        swapped = false
        for (let ind = 0; ind < arr.length - 1; ind++) {
            counter++
            if (arr[ind] > arr[ind + 1]) {
                swapped = true
                let temp = arr[ind]
                arr[ind] = arr[ind + 1]
                arr[ind + 1] = temp
            }
        }
    } while (swapped);
    console.log(...arr)
}

bubbleSort([5, 4, 3, 2, 1])


