


// var majorityElement = function (nums) {
//     let candidate = null;
//     let count = 0;

//     // Phase 1: Finding a Candidate
//     for (let num of nums) {
//         if (count === 0) {
//             candidate = num;
//         }
//         count += (num === candidate) ? 1 : -1;
//     }

//     // Phase 2: Verifying the Candidate
//     count = 0;
//     for (let num of nums) {
//         if (num === candidate) {
//             count++;
//         }
//     }

//     return count > Math.floor(nums.length / 2) ? candidate : null;
// };

// // Example usage:
// console.log(majorityElement([3, 2, 3])); // Output: 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

//---------------------------------------------------------------------------------------------------------------------


// var majorityElement = function (nums) {
//     let candidate = null;
//     let count = 0;

//     // Phase 1: Finding a Candidate
//     for (let i = 0; i < nums.length; i++) {
//         if (count === 0) {
//             candidate = nums[i];
//         }
//         count += (nums[i] === candidate) ? 1 : -1;
//     }

//     // Phase 2: Verifying the Candidate
//     count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === candidate) {
//             count++;
//         }
//     }

//     return count > Math.floor(nums.length / 2) ? candidate : null;
// };

// // Example usage:
// console.log(majorityElement([3, 2, 3])); // Output: 3
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2

//----------------------------------------------------------------------------------------------

// function add(num, target) {
//     let sum = []
//     for (let i = 0; i < num.length; i++) {
//         for (let j = i + 1; j < num.length; j++) {
//             if (num[i]+num[j] == target) {
//                 return [i, j]
//             }
//         }
//     }
//     return sum
// }


// console.log(add([2, 7, 4, 6, 12], 10))

//------------------------------

// function add(num, target) {
//     let sum = 0
//     for (let i = 0; i < num.length; i++){
//         for (let j = i + 1; j < num.length; j++){
//             if (num[i] + num[j] == target) {
//                 sum = [i, j]
//             }
//         }
//     }
//     return sum
// }
// console.log(add([2, 7, 4, 6, 12], 10))

//-----------------------------------------------------------------------------------------------------------------

// function binaryString(num) {
//     let count = 0;
//     for (let i = 0; i < num.length; i++){
//         if (num[i] == "1") {
//             count++
//         }
//     }
//     return count
// }
// let num = "00000000000000000000000100011"
// console.log(binaryString(num))

//----------------------------------------------------------------------------------------------------

// function isAnagram(s, t) {
//     // Check if the lengths are different
//     if (s.length !== t.length) {
//         return false;
//     }

//     // Sort both strings
//     let sortedS = s.split('').sort().join('');
//     let sortedT = t.split('').sort().join('');

//     // Compare sorted strings
//     return sortedS === sortedT;
// }

// // Example usage:
// let s = "anagram";
// let t = "nagaram";

// console.log(isAnagram(s, t)); // Output: true

//-----------------------------------------------------------------------------------------

// function isAnagram(s, t) {
//     if (s.length != t.length) {
//         return false
//     }

//     let str1 = s.split("").sort().join("")
//     let str2 = t.split("").sort().join("")
//     if (str1 == str2) {
//         return true
//     }
// }

// let s = "anagra"
// let t = "nagaram"
// console.log(isAnagram(s, t))


//-----------------------------------------------------------------------------------

// function subString(str) {
//     let res = []
//     for (i = 0; i < str.length; i++){
//         for (j = i + 1; j < str.length; j++){
//             if (str[i] != str[j]) {
//                 res.push(str)
//             }
//         }
//     }
//     return res
// }

// let str = "qmmrtrmmnn"
// console.log(subString(str))

//----------------------------------------------------------------------------------------------------------

// let str = "abcmnb";
// let result = "";

// for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//         result += str[i];
//     }
// }

// console.log(result); // Output: "qpr"

// const linearSearch = (num, tar) => {
//     let res = []
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] === tar) {
//             res.push(i)
//         }

//     }
//     if (res.length == 0) return -1
//     return res
// }

// console.log(linearSearch([1, 6, 3, 4, 5, 6], 1))

//-----------------------------------------------------------------------------------------

// function linear(num, tar) {
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] == tar) return i
//     }
//     return -1
// }

// console.log(linear([1, 2, 3, 4, 5, 6], 7))

//---------------------------------------------------------------------------------------------------

// function missing(num, k) {
//     let count = 0;
//     for (let i = 0; i < num.length; i++){
//         if (num[i] <= k + count) {
//             count ++
//         }
//     }
//     return count + k
// }

// let num = [2, 3, 4, 7, 11]
// let k = 5
// console.log(missing(num, k))

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length -i - 1; j++) {
//         console.log(`i: ${i}, j: ${j}, arr[i]: ${arr[i]}, arr[j]: ${arr[j]}`);
//     }

// }



// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//             }
//         }
//     }
//     return arr
// }

// let arr = [29, 10, 14, 37, 14]
// console.log(bubbleSort(arr))



// const selectionSort = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         let midIndex = i
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[midIndex]) {
//                 midIndex = j
//             }
//         }
//         if (midIndex !== i) {
//             [arr[i], arr[midIndex]] = [arr[midIndex], arr[i]]
//         }
//     }
//     return arr
// }
// let arr = [29, 10, 14, 37, 14]

// console.log(selectionSort(arr))

//-----------------------------------------------------------------------------------------------------------------------------------------

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let key = arr[i]
//         let j = i - 1;
//         while (j >= 0 && arr[j] > key) {
//             arr[j + 1] = arr[j]
//             j--
//         }
//         arr[j + 1] = key
//     }
//     return arr
// }


// let nums = [10, 5, 18, 1, 27]

// const compare = (a, b) => {
//     return b-a
// }

// console.log(nums.sort(compare))

//-------------------------------------------------------------------------------------------------------

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const pivot = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7]))




