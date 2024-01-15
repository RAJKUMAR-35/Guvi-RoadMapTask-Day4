// 1) Do the below programs in anonymous function
    
// a.Print odd numbers in an array


let odd = function (arr) {
    let oddNumber = [];
    for (let keys of arr) {
        if (keys % 2 !== 0) {
            oddNumber.push(keys);
        }
    }
    console.log(oddNumber);
}

odd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Output : [ 1, 3, 5, 7, 9 ]




// b.Convert all the strings to title caps in a string array

let Caps = function (arr) {
    let titleCaps = []
    for (let keys of arr) {
        titleCaps.push((keys.charAt(0).toUpperCase()+keys.slice(1)))
    }
    console.log(titleCaps)
}
Caps(["raj", "bindu", "akshaya", "malathi"]);

//Output : [ 'Raj', 'Bindu', 'Akshaya', 'Malathi' ]




// c.Sum of all numbers in an array

let sum = function (arr) {
    let sumOfArray = 0;
    for (let value of arr) {
        sumOfArray += value;
    }
    console.log("sum of Array:",sumOfArray)
}
sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Output : sum of Array: 55




// d. Return all the prime numbers in an array

let prime = function (arr) {
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
}
console.log("Prime Number:",prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Prime Number: [ 2, 3, 5, 7 ]




// e. Return all the palindromes in an array

let palindromes = function (arr) {
    let palin = []
    for (let keys of arr) {
        let flag = true;
        let word = keys.toLowerCase();
        for (let i = 0; i <= word.length / 2; i++){
            if (word[i] !== word[word.length - 1 - i]) {
               flag = false;
           } 
        }
        if (flag) {
            palin.push(keys);
        }
    }
    return palin;
}

console.log(palindromes(["Madam", "Raja", "Pop", "King"]));

//Output : [ 'Madam', 'Pop' ]




//f. Return median of two sorted arrays of the same size

let median = function (arr1, arr2) {
    let fullArray = (arr1.concat(arr2)).sort((a,b)=>a-b)
    
    let value_1 = Math.floor((fullArray.length - 1) / 2);
    let value_2 = Math.ceil((fullArray.length - 1) / 2);

    let medianValue = ((fullArray[value_1] + fullArray[value_2]) / 2);
    return [medianValue];
}


console.log(...median([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]));

//Output : 4



// g.Remove duplicates from an array

let uniqueArray = function (arr) {
    let newArray = [];
    let unique = new Set(arr);
    newArray.push(...unique);
    return newArray;
}
console.log(uniqueArray([1, 1, 2, 3, 4, 3, 5, 7, 8, 6, 4, 5, 2, 9, 3,]));

//Output : [1, 2, 3, 4, 5,7, 8, 6, 9]




// h.Rotate an array by k times


let rotatedArray = function (arr,x) {
    let rotataionValue = (x % arr.length);
    let finalArray = (arr.slice(-rotataionValue).concat(arr.slice(0,arr.length - rotataionValue)))
    console.log(finalArray);
}
rotatedArray(["Mustang", "Ferrari", "Bugatti", "Supra", "F1"], 3);

//output : [ 'Bugatti', 'Supra', 'F1', 'Mustang', 'Ferrari' ]



