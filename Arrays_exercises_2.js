let array = new Array();
let numbers = new Array();
function reset() {
  array = [];
  numbers = [];
}

// 1. Create an empty array and fill it with different elements using the push-method. Log it to the console.
reset();
array.push("ABC");
array.push(123);
array.push(true);
console.log("Uppgift 1:", array);

// 2. Create an array containing arbitrary numbers. Loop throught that array and multiply each element with 3 and log that to the console.
reset();
numbers = [7, 22, 45, 13, 98];
for (i in numbers) {
  numbers[i] *= 3;
}
console.log("Uppgift 2:", numbers);

// 3. Create an array with numbers, and one empty array. Loop through the array with numbers and do an if check in each iteration.
// If that number is bigger then a specific number, 5 for example, add that number to the empty array.
// Log the new array to the console in the end. Remember to use the indexes to get the elements from the array with numbers.
reset();
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
specific_number = 5;
for (n in numbers) {
  numbers[n] > specific_number ? array.push(numbers[n]) : 0;
}
console.log("Uppgift 3:", array);

// 4. Create an array with random numbers. Loop through the array and add them all together.
// Log the total sum of all the elements to the console. hint - You will need a variable here that store the sum as you iterate over the array.
reset();
random_numbers = 7;
total = 0;
for (i = 0; i < random_numbers; i++) {
  random_int = Math.ceil(Math.random() * 10);
  array.push(random_int);
  total += random_int;
}
console.log("Uppgift 4:", array, "Total:", total);

// 5. Create an array with some elements. Now search for a specific element while you are looping through the array.
// If you find the element you are searching for, log it to the console.
reset();
find_number = 7;
numbers = [11, 6, 2, 4, 7, 6, 9, 8, 9, 10];
found = false;
for (n in numbers) {
  numbers[n] == find_number ? console.log(`Uppgift 5: Number ${find_number} found at array-index [${n}]`) : 0;
}

// 6. Create an array with some elements, remove the last element WITHOUT using pop().
reset();
numbers = [1, 2, 3, 4, 5].slice(0, -1);
console.log(`Uppgift 6: [${numbers}]`);

// 7. Create an array with 10 different numbers. Find the biggest number in the array and log it to the console.
// hint - You will need a variable that holds the current biggest number.
reset();
numbers = [1, 2, 3, 4, 5, 1, 2, 3, 17, 5];
largest = numbers[0];
for (n in numbers) {
  numbers[n] > largest ? (largest = numbers[n]) : 0;
}
console.log(`Uppgift 7: Largest number in [${numbers}] is ${largest}`);

// 8. Create an array with some elements and an empty array. Using a loop, copy the content of the first array to the empty array.
reset();
elements = ["Javascript", "is", "a", "programming", "language", "!"];

for (e in elements) {
  array.push(elements[e]);
}
console.log("Uppgift 8:", array);

// 9. Create an array with some elements. Use a loop to empty the entire array so there are no elements left in the end.
reset();
array = ["PLEASE", "DO", "NOT", "DELETE", "ME", "!"];
do {
  array.pop();
} while (array.length);
console.log("Uppgift 9: Array is now", array);
