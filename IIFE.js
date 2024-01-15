// 1) Do the below programs in IIFE


// a.Print odd numbers in an array

let odd_1 = (function (arr) {
    let oddNumber = [];
    for (let keys of arr) {
        if (keys % 2 !== 0) {
            oddNumber.push(keys);
        }
    }
    console.log(oddNumber);
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//Output : [ 1, 3, 5, 7, 9 ]




// b.Convert all the strings to title caps in a string array

let Caps_1 = (function (arr) {
    let titleCaps = []
    for (let keys of arr) {
        titleCaps.push((keys.charAt(0).toUpperCase()+keys.slice(1)))
    }
    console.log(titleCaps)
}) (["raj", "bindu", "akshaya", "malathi"])

//Output : [ 'Raj', 'Bindu', 'Akshaya', 'Malathi' ]




// c.Sum of all numbers in an array

let sum_1 = (function (arr) {
    let sumOfArray = 0;
    for (let value of arr) {
        sumOfArray += value;
    }
    console.log("sum of Array:", sumOfArray)
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//\Output : sum of Array: 55


// d. Return all the prime numbers in an array

let prime_1 = (function (arr) {
    let primeNum = [];
    for (let key of arr) {
        let factor = 0;
        for (let i = 2; i <= key; i++){
            if (key % i === 0) {
                factor++;
            }
        }
        if (factor === 1) {
            primeNum.push(key);
        }
    }
    return(primeNum)
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(prime_1);

//Output : [ 2, 3, 5, 7 ]




// e. Return all the palindromes in an array

let palindrome_1 = (function (arr) {
    let palin = [];
    for (let i = 0; i < arr.length; i++) {
        let flag = true;
        let word = arr[i].toLowerCase();

        for (let j = 0; j < Math.floor(word.length / 2); j++) {
            if (word[j] !== word[word.length - 1 - j]) {
                flag = false;
                break;
            }
        }

        if (flag) {
            palin.push(arr[i]);
        }
    }
    return palin;
}) (["king", "madam", "pop", "Queen"])

console.log("Palindrome: ", palindrome_1);

//Palindrome:  [ 'madam', 'pop' ]




//f. Return median of two sorted arrays of the same size

let median_1 = (function (arr1, arr2) {
    let fullArray = (arr1.concat(arr2)).sort((a,b)=>a-b)
    
    let value_1 = Math.floor((fullArray.length - 1) / 2);
    let value_2 = Math.ceil((fullArray.length - 1) / 2);

    let medianValue = ((fullArray[value_1] + fullArray[value_2]) / 2);
    return [medianValue];
})([1, 2, 3, 4, 5], [2, 4, 6, 8, 10])

console.log(...median_1);

//Output : 4




// g. Remove duplicates from an array

let uniqueArray_1 = (function (arr) {
    let newArray = [];
    let unique = new Set(arr);
    newArray.push(...unique);
    return newArray;
}) ([1, 1, 2, 3, 4, 3, 5, 7, 8, 6, 4, 5, 2, 9, 3,])
console.log(uniqueArray_1);

//Output : [1, 2, 3, 4, 5,7, 8, 6, 9]




// h. Rotate an array by k times

let rotatedArray_1 = (function (arr,x) {
    let rotataionValue = (x % arr.length);
    let finalArray = (arr.slice(-rotataionValue).concat(arr.slice(0,arr.length - rotataionValue)))
    console.log(finalArray);
})(["Mustang", "Ferrari", "Bugatti", "Supra", "F1"], 3);

//output : [ 'Bugatti', 'Supra', 'F1', 'Mustang', 'Ferrari' ]