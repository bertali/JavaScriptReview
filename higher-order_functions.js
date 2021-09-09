//FUNCTIONS AS DATA

//JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to new variables.

//1. We’ve defined a function with a very long name: checkThatTwoPlusTwoEqualsFourAMillionTimes. This function takes a long time to execute. It checks whether 2 + 2 = 4, but it does it a million times (just to be really sure)! Create a shorter-named variable, is2p2 that will be easier to work with, and assign checkThatTwoPlusTwoEqualsFourAMillionTimes as its value.
//2. Invoke your is2p2() function
//3. Hmmm, if we forgot the original name of our function, is there a way we could figure it out? Use is2p2 to console.log() the name property of the function we assigned to is2p2. 



const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  }
  
  // Write your code below
  
  const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  
  is2p2();
  
  console.log(is2p2.name);



//FUNCTION AS PARAMETERS

//When we pass a function in as an argument to another function, we don’t invoke it. Invoking the function would evaluate to the return value of that function call. With callbacks, we pass in the function itself by typing the function name without the parentheses (that would evaluate to the result of calling the function):

const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
 }
  
 const addOneToOne = () => 1 + 1;
  
 timeFuncRuntime(addOneToOne);


//We wrote a higher-order function, timeFuncRuntime(). It takes in a function as an argument, saves a starting time, invokes the callback function, records the time after the function was called, and returns the time the function took to run by subtracting the starting time from the ending time.

//This higher-order function could be used with any callback function which makes it a potentially powerful piece of code.

//We then invoked timeFuncRuntime() first with the addOneToOne() function - note how we passed in addOneToOne and did not invoke it.

timeFuncRuntime(() => {
    for (let i = 10; i>0; i--){
      console.log(i);
    }
  });

//In this example, we invoked timeFuncRuntime() with an anonymous function that counts backwards from 10. Anonymous functions can be arguments too!

//Let’s get some practice using functions and writing higher-order functions.

//Exercicie:

//1. Save a variable, time2p2. Assign as its value the result of invoking the timeFuncRuntime() function with the checkThatTwoPlusTwoEqualsFourAMillionTimes() function.
//2. Write a higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value. It should call the argument function with the value two times. If the callback function produces the same result twice, it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results'.

const time2p2 = timeFuncRuntime (checkThatTwoPlusTwoEqualsFourAMillionTimes);


const checkConsistentOutput = (func, val) => {
  let tryOne = func(val);
  let tryTwo = func(val);
  if(tryOne === tryTwo) {
    return tryOne;
  } else {
    return 'This function returned inconsistent results'
  }
};

//3.Invoke your checkConsistentOutput() with the addTwo() function we wrote and a number as arguments.

checkConsistentOutput(addTwo, 1);

