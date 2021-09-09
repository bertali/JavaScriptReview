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

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

//The counterTwo variable is declared before the loop. We can access it inside our while loop since it’s in the global scope.
//We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
//Next, we have our loop’s code block which prints counterTwo to the console and increments counterTwo.
//So you may be wondering when to use a while loop! The syntax of a for loop is ideal when we know how many times the loop should run, but we don’t always know this in advance. Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather you’ll eat while you’re hungry. In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.


const cards = ['diamond', 'spade', 'heart', 'club'];

//Create a while loop with a condition that checks if the currentCard does not have that value 'spade'.

//Inside the block of your while loop, add the following line of code:

currentCard = cards[Math.floor(Math.random() * 4)];

//Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array.

/* let currentCard = 0;
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
  } */

//DO... WHILE STATEMENTS

//In some cases, you want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

//A do...while statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);


//Note that the while and do...while loop are different! Unlike the while loop, do...while will run at least once whether or not the condition evaluates to true.

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};



//THE BREAK KEYWORD

//Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day 65? We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.

//The break keyword allows programs to “break” out of the loop from within the loop’s block.

//Let’s check out the syntax of a break keyword:

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');

//This is the output for the above code:

/* Banana.
Banana.
Banana.
Orange you glad I broke out the loop! */

//break statements can be especially helpful when we’re looping through large data structures! With breaks, we can add test conditions besides the stopping condition, and exit the loop when they’re met.

//Exercice:

//1.Log each element from rapperArray in a for loop with the iterator variable i.
//2.After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there’s a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.
//3.Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below

for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know.")


