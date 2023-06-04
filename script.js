// Concatenating arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log("Concatenated array:", combined);

// Copying elements within an array
const arr3 = [1, 2, 3, 4, 5];
arr3.copyWithin(1, 3, 5);
console.log("Copied array:", arr3);

// Mapping over array elements
const arr4 = [1, 2, 3, 4, 5];
const mapped = arr4.map((num) => num * 2);
console.log("Mapped array:", mapped);

// Checking if every element meets a condition
const arr5 = [2, 4, 6, 8, 10];
const everyResult = arr5.every((num) => num % 2 === 0);
console.log("Every element is even:", everyResult);

// Checking if some elements meet a condition
const arr6 = [1, 2, 3, 4, 5];
const someResult = arr6.some((num) => num > 3);
console.log("Some elements are greater than 3:", someResult);

// Filtering elements based on a condition
const arr7 = [1, 2, 3, 4, 5];
const filtered = arr7.filter((num) => num % 2 === 0);
console.log("Filtered array:", filtered);

// Finding the first element that meets a condition
const arr8 = [1, 2, 3, 4, 5];
const found = arr8.find((num) => num > 3);
console.log("First element greater than 3:", found);
