//THE FOR LOOP

//Instead of writing out the same code over and over, loops allow us to tell computers to repeat a given block of code on its own. One way to give computers these instructions is with a for loop.

//BEFORE
const vacationSpots = ['Brazil', 'Kenya', 'Colombia' ]

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//AFTER

for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
  }

//Console.log = 0
                1
                2
                3

//The initialization is let counter = 0, so the loop will start counting at 0.
//The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
//The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration counter will equal 0, for the second iteration counter will equal 1, and so on.
//The code block is inside of the curly braces, console.log(counter), will execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.


//LOOPING IN REVERSE

for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }



//LOOPING THROUGH ARRAYS

//for loops are very handy for iterating over data structures. For example, we can use a for loop to perform the same operation on each element on an array. Arrays hold lists of data, like customer names or product information. Imagine we owned a store and wanted to increase the price of every product in our catalog. That could be a lot of repeating code, but by using a for loop to iterate through the array we could accomplish this task easily.

//To loop through each element in an array, a for loop should use the array’s .length property in its condition.

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

//This example would give you the following output:

/* Grizzly Bear
Sloth
Sea Lion */

//In the loop above, we’ve named our iterator variable i. This is a variable naming convention you’ll see in a lot of loops. When we use i to iterate through arrays we can think of it as being short-hand for the word index. Notice how our stopping condition checks that i is less than animals.length. Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the length of that array minus 1. If we tried to access an element at the index of animals.length we will have gone too far!

//1. Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

//Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.

for (let i = 0; i<vacationSpots.length; i++){
    console.log('I would love to visit ' + vacationSpots[i])
  };


//NESTED LOOPS

//When we have a loop running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.

//Let’s look at an example of a nested for loop:

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

//Let’s think about what’s happening in the nested loop in our example. For each element in the outer loop array, myArray, the inner loop will run in its entirety comparing the current element from the outer array, myArray[i], to each element in the inner array, yourArray[j]. When it finds a match, it prints a string to the console.

//1.Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends.

let bobsFollowers = ['Ted', 'Laura', 'Mar', 'Karl'];

let tinasFollowers = ['Laura', 'Mar', 'Pep'];

let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(tinasFollowers[j])
    }
  }
};

console.log(mutualFollowers);


//THE WHILE LOOP

