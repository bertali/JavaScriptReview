//CREATE AN ARRAY

//Declare a variable using const named hobbies and set it equal to an array with three strings inside of it.

const hobbies = ['run', 'music', 'photography'];

console.log (hobbies);


//ACCESSING ELEMENTS

//Individual elements in arrays can also be stored to variables.
//Create a variable named listItem and set it equal to the first item in the famousSayings array using square bracket notation ([]).

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

//Create a variable named listItem and set it equal to the first item in the famousSayings array using square bracket notation ([]).
let listItem = famousSayings[0];

console.log(listItem);

//Now, console.log() the third element in the famousSayings array using bracket notation to access the element.

console.log(famousSayings[2]);

//Awesome, you can access each element in an array using the index. But what happens if you try to access an index that is beyond the last element?

console.log(famousSayings[3]);


//UPDATE ELEMENTS

//Once you have access to an element in an array, you can update its value.
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
//The line, seasons[3] = 'Autumn'; tells our program to change the item at index 3 of the seasons array to be 'Autumn' instead of what is already there.



//ARRAYS WITH LET AND CONST
//You may recall that you can declare variables with both the let and const keywords. Variables declared with let can be reassigned.
//Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

//1.Below the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'.

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

condiments[0] = 'Mayo';
console.log(condiments);


//2.Below your code from Step 1, reassign condiments to be a new array that contains a single string ['Mayo'].

condiments = ['Mayo'];
console.log(condiments);


//THE .lenght PROPERTY
//One of an array’s built-in properties is length and it returns the number of items in the array. We access the .length property just like we do with strings. Check the example below:

const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
console.log(newYearsResolutions.length);
// Output: 2


//THE .push() METHOD

//One method, .push() allows us to add items to the end of an array. Here is an example of how this is used:
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker); 
// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];

//We access the push method by using dot notation, connecting push to itemTracker with a period.
//Then we call it like a function. That’s because .push() is a function and one that JavaScript allows us to use right on an array.
//.push() can take a single argument or multiple arguments separated by commas. In this case, we’re adding two elements: 'item 3' and 'item 4' to itemTracker.
//Notice that .push() changes, or mutates, itemTracker. You might also see .push() referred to as a destructive array method since it changes the initial array.



//THE .pop() METHOD
//.pop(), removes the last item of an array.

const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2

//In the example above, calling .pop() on the newItemTracker array removed item 2 from the end.
//.pop() does not take any arguments, it simply removes the last element of newItemTracker.
//.pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
//.pop() is a method that mutates the initial array.


//MORE ARRAY METHODS

//1.Use the .shift() method to remove the first item from the array groceryList.
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();

console.log(groceryList);


//2.Use the .unshift() method to add 'popcorn' to the beginning of your grocery list.

groceryList.unshift('popcorn');

console.log(groceryList);

//3.You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'. Under the code you added for step 2, use .slice() to provide your friend with a list of these three things.

//Should be: console.log(array.method(first, last+1));
console.log(groceryList.slice(1, 4));


//ARRAYS AND FUNCTIONS
//Take a look at the following example where we call .push() on an array inside a function. Recall, the .push() method mutates, or changes, an array:

const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

//The flowers array that has 3 elements.
//The function addFlower() has a parameter of arr uses .push() to add a 'lily' element into arr.
//We call addFlower() with an argument of flowers which will execute the code inside addFlower.
//We check the value of flowers and it now includes the 'lily' element! The array was mutated!

//1.In main.js, there is an array concept. There is also a function changeArr that will assign the element in index 3 of an array to 'MUTATED'. The function changeArr was called with an argument of concept.

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);


//2. Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body call .pop() on newArr.

function removeElement(newArr){
    newArr.pop();
  }
  
  removeElement(concept);
  
  console.log(concept);


  //NESTED ARRAYS

  //Earlier we mentioned that arrays can store other arrays. When an array contains another array it is known as a nested array. Examine the example below:

  const nestedArr = [[1], [2, 3]];


  //To access the nested arrays we can use bracket notation with the index value, just like we did to access any other element:

  const nestedArr = [[1], [2, 3]];
 
  console.log(nestedArr[1]); // Output: [2, 3]


  //Notice that nestedArr[1] will grab the element in index 1 which is the array [2, 3]. Then, if we wanted to access the elements within the nested array we can chain, or add on, more bracket notation with index values.

  const nestedArr = [[1], [2, 3]];
 
  console.log(nestedArr[1]); // Output: [2, 3]
  console.log(nestedArr[1][0]); // Output: 2



    