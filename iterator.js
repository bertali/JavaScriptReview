//INTRO different methods

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

//Console.log

/* Picasso is one of my favorite artists.
Kahlo is one of my favorite artists.
Matisse is one of my favorite artists.
Utamaro is one of my favorite artists.
[ 1, 4, 9, 16, 25 ]
[ 5, 3.14, 100 ] */


//THE .forEach()Method
//Aptly named, .forEach() will execute the same code for each element of an array.

const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function(groceryItem){
  console.log('-' + groceryItem);
});

//or

groceries.forEach(groceryItem => console.log(groceryItem));

//or

function printGrocery(element){
    console.log(element);
  }
   
  groceries.forEach(printGrocery);


//1. Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango. You may use any form of callback you prefer.

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach( fruitItem => console.log('I want to eat a ' + fruitItem));

//or:

fruits.forEach( function (fruitItem) {
    console.log('I want to eat a ' + fruitItem);
  });


//THE .map() Method
//it takes an argument of a callback function and returns a new array!

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});

//.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.

//In the example above:

//numbers is an array of numbers.
//bigNumbers will store the return value of calling .map() on numbers.
//numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
//return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.
//If we take a look at numbers and bigNumbers:

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

//1. Add your code under the animals array and before the line console.log(secretMessage.join(''));
//Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const secretMessage = animals.map(animals => {
 return animals.charAt(0);
});

//2. Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below

const smallNumbers = bigNumbers.map(bigNumbers => {
  return bigNumbers / 100;
});

console.log (smallNumbers);

//THE .filter() Method

//.filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
});

//words is an array that contains string elements.
//const shortWords = declares a new variable that will store the returned array from invoking .filter().
//The callback function is an arrow function has a single parameter, word. Each element in the words array will be passed to this function as an argument.
//word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.
//Let’s also check the values of words and shortWords:

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

//Exercice:

//1. Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below

const smallNumbers = randomNumbers.filter(randomNumbers => {
return randomNumbers < 250
});

console.log(smallNumbers);

//2. Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.

const longFavoriteWords = favoriteWords.filter(favoriteWords => {
    return favoriteWords.length > 7
  });
  
  console.log(longFavoriteWords);


//THE .findIndex() Method 

//We sometimes want to find the location of an element in an array. That’s where the .findIndex() method comes in! Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function.

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});


//umbledNums is an array that contains elements that are numbers.
//const lessThanTen = declares a new variable that stores the returned index number from invoking .findIndex().
//The callback function is an arrow function that has a single parameter, num. Each element in the jumbledNums array will be passed to this function as an argument.
//num < 10; is the condition that elements are checked against. .findIndex() will return the index of the first element which evaluates to true for that condition.


//Let’s take a look at what lessThanTen evaluates to:

console.log(lessThanTen); // Output: 3 


//If we check what element has index of 3:

console.log(jumbledNums[3]); // Output: 5




//If there isn’t a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1.

const greaterThan1000 = jumbledNums.findIndex(num => {
    return num > 1000;
  });
   
  console.log(greaterThan1000); // Output: -1


//1. Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex( animals => {
    return animals === 'elephant'
  });


//2. Let’s see if we can find the index of the first animal that starts with the letter 's'.
//Call .findIndex() on the animals array return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.

const startsWithS = animals.findIndex( animals => {
    return animals[0] === 's' ? true : false;
  })
  
  console.log(startsWithS);
  
  console.log(animals[3]);


//THE .reduce() Method

//The .reduce() method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:

const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums) // Output: 17

//accumulator: 1, 3, 7
//currentValue: 2, 3, 10
//return value: 3, 7, 17

//Now let’s go over the use of .reduce() from the example above:
//numbers is an array that contains numbers.
//summedNums is a variable that stores the returned value of invoking .reduce() on numbers.
//numbers.reduce() calls the .reduce() method on the numbers array and takes in a callback function as argument.
//The callback function has two parameters, accumulator and currentValue. The value of accumulator starts off as the value of the first element in the array and the currentValue starts as the second element. To see the value of accumulator and currentValue change, review the chart above.
//As .reduce() iterates through the array, the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process.

//The .reduce() method can also take an optional second parameter to set an initial value for accumulator (remember, the first argument is the callback function!). For instance:

const numbers = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNums); // Output: 117

//accumulator: 100, 101, 103, 107
//currentValue: 1, 2, 4, 10
//return value: 101, 103, 107, 117

//Exercicie:

//1. Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array. 
/* To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet.
You’ll also see a TypeError: undefined is not a function but we’ll fix that after we add our callback function in the next step! */
//2. Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce( (accumulator, currentValue)=> {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
});

console.log(newSum);

//Console.log: 

/* The value of accumulator:  1
The value of currentValue:  3
The value of accumulator:  4
The value of currentValue:  5
The value of accumulator:  9
The value of currentValue:  7
16 */


//5. While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator. Add a second argument of 10 to .reduce().

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce( (accumulator, currentValue)=> {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10);

console.log(newSum);


//ITERATOR DOCUMENTATION

//1. In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

/* console.log(words.some(() => {
  return word.length < 6;
})); */

console.log(words.some((word) => {
  return word.length < 6;
}));

//2. The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.

const interestingWords = words.filter( words => {
  return words.length > 5;
  });

//3. Complete the code between the parentheses to check if every element has more than 5 characters.

console.log(interestingWords.every((word) => {
  return word.length > 5 }));


//CHOOSE THE RIGHT ITERATOR

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);





