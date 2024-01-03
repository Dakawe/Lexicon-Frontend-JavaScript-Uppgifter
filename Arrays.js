const numbers = [2, 6, 12, 7, 22, 35];

// 1. Create a variable where you store the first element of the numbers array. Log it to the console.
first_in_array = numbers[0];
console.log("Uppgift 1 ->", first_in_array);

// 2. Create a variable where you store the last element of the numbers array. Log it to the console.
[last_in_array] = numbers.slice(-1);
console.log("Uppgift 2 ->", last_in_array);

// 3. Create a variable where you store the fourth element of the numbers array. Log it to the console.
fourth_in_array = numbers[3];
console.log("Uppgift 3 ->", fourth_in_array);

// 4. Store the second and the fifth element of the numbers array in variables. Create a new array and populate it with those two variables. Log it to the console.
array = [];
second_in_array = numbers[1];
fifth_in_array = numbers[4];
array.push(second_in_array, fifth_in_array);
console.log("Uppgift 4 ->", array);

// 5. What is the length of the numbers array? Use the correct array property to save that number to a variable and log it to the console.
length_of_array = numbers.length;
console.log("Uppgift 5 ->", length_of_array);

// 6. Add an arbitrary number to the end of the numbers array with the correct array method. This array method returns a value. Save that to a variable and log it to the console. What does this number represent?
// 7. Add an arbitrary number to the start of the numbers array using the correct array method. This method also returns a value. Log it to the console and reflect on what this value means.
// 8. Let's shrink it again. Remove the last element from the array with an array method. This method should return a value as well. Log it to the console as see what it is.
// 9. Do the same as the last one, but remove it from the beginning instead. Log the return value to the console.
numbers.push(77); // Element end of array added
console.log("Uppgift 6 ->", numbers);
numbers.unshift(1); // Element start of array added
console.log("Uppgift 7 ->", numbers);
numbers.pop(); // Element end of array removed
console.log("Uppgift 8 ->", numbers);
numbers.shift(); // Element start of array removed
console.log("Uppgift 9 ->", numbers);

// 10. If we have done the last couple of exercises correctly, we should have the same content as the default array. Log it out the console and see for yourself.
console.log("Uppgift 10 ->", numbers);
