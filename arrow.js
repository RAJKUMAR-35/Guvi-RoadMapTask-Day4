// 2) Do the below programs in arrow functions.
 
// a. Print odd numbers in an array

let oddnum= (arr)=>{
    let oddNumber = [];
    for (let keys of arr) {
        if (keys % 2 !== 0) {
            oddNumber.push(keys);
        }
    }
    console.log(oddNumber);
}
oddnum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Output : [ 1, 3, 5, 7, 9 ]




// b. Convert all the strings to title caps in a string array

let Cap = (arr)=>{
    let titleCaps = []
    for (let keys of arr) {
        titleCaps.push((keys.charAt(0).toUpperCase()+keys.slice(1)))
    }
    console.log(titleCaps)
}
Cap(["raj", "bindu", "akshaya", "malathi"]);

//Output : [ 'Raj', 'Bindu', 'Akshaya', 'Malathi' ]




// c. Sum of all numbers in an array

let sumOfNum = (arr)=>{
    let sumOfArray = 0;
    for (let value of arr) {
        sumOfArray += value;
    }
    console.log("sum of Array:",sumOfArray)
}
sumOfNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Output : sum of Array: 55




// d. Return all the prime numbers in an array

let primenumber = (arr)=>{
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
console.log("Prime Number:",primenumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//Prime Number: [ 2, 3, 5, 7 ]




// e. Return all the palindromes in an array

let palindrome = (arr)=>{
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
console.log(palindrome(["Madam", "Raja", "Pop", "King"]));

//Output : [ 'Madam', 'Pop' ]