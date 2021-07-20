/*Create a function that builds an array of 10 random numbers between 1 and 50.The function prints that array out in the console and then returns it.*/

function randomArr() {
    var arr = [];
    for (var i = 0; i<10; i++) {
    arr.push(50*Math.random());
    }
    //console.log(arr);
    return arr;
};

/* Create a function that uses the passed array of numbers and rounds all its
elements to two decimals.
Print out the modified array in the console.
Use the first function for generating the input array.*/

function roundNumEl () {
    var arr = randomArr();
    for(var i = 0; i<arr.length; i++) {
        arr[i] = parseFloat(arr[i].toFixed(2));
    }
    return arr;
}

console.log(roundNumEl());

/* Create a function that uses the passed array of numbers and rounds all its
elements to the nearest integer.
Print out the modified array in the console.
Use the first function for generating the input array. */

function roundToInt () {
    var arr = roundNumEl();
    for(var i = 0; i<arr.length; i++) {
        arr[i] = Math.floor(arr[i]);
    }
    return arr;
}

console.log(roundToInt());
console.log(String(roundToInt));

/* Create a function that finds and prints out the biggest element in the passed
array of numbers. */

function maxEl () {
    var arr = roundToInt();
    var maxElement = Math.max(...arr);
    return maxElement;
}

console.log(maxEl());

/* Print out the whole date object in the console.

● Print out the current time in the console.
● Print out the current date in the console.*/

var date = new Date();
var time = date.getHours() + " : " + date.getMinutes();
var currentDate = date.getDate()+ "." + (date.getMonth()+1) + "." + date.getFullYear();
console.log(date);
console.log(time);
console.log(currentDate);


