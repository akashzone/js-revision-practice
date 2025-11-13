
//Array is datatype, where we can store multiple values in a single variable..

const arr = ["Akash",19,"Bsc-CS"];

console.log(arr[0]); //To access array value we can use index, Array is a zero based index
console.log(arr[1]); //Indexing Starts from 0

console.log("Array before push:",arr);
arr.push(2025); // Push is used to add elements at the end of the array..
console.log("Array after push : ",arr); 



arr.pop(); // Pop is used to remove elements from the end of the array..
console.log("Array after pop : ",arr);


let arr2 = [9,2,4,5,1];

arr2.unshift(11); // Unshift is used to add elements at the begining of the array.
console.log(arr2);

arr2.shift(); // Shift is used to remove elements from the begining.. 
console.log(arr2);

let arr3 = ["Akash","Sam","Govind"];
console.log(arr3.indexOf("Sam")); // IndexOf function is used to get index of an element from the array..

console.log(arr3.includes("Akash")); // Used to check whether there is Akash in arr3.. 
// If it is not there than returns false, if it is there then return true.

let arr4 = [1,2,4,5,6,7,8,9];

// arr4.reverse(); // Reverses the original arr4..
// console.log(arr4);


// Slice takes two parameter the starting index and ending (n-1)..
// No change in original array.
console.log(arr4.slice(2)); // If we specify only one then it starts from index 2 to the end..
arr4.reverse();


//Splice 
// No change in original array.
console.log(arr4.splice(1,1,99)); // Splice takes three parameter (start,delete,element)..

// Tasks 1:
let array = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<array.length;i++){
    console.log(`${i} : ${array[i]}`);
}
