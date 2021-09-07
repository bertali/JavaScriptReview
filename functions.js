//PARAMETERS//

//The function makeShoppingList() creates a shopping list based on the items that are passed to the function as arguments.//

function makeShoppingList(item1, item2, item3){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  //Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList().//

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

//RETURN//

//Imagine if we needed to order monitors for everyone in an office and this office is conveniently arranged in a grid shape. We could use a function to help us calculate the number of monitors needed!

function monitorCount (rows, columns) {
  
}

//Let’s compute the number of monitors by multiplying rows and columns and then returning the value.

function monitorCount (rows, columns) {
  return rows * columns
}

//Now that the function is defined, we can compute the number of monitors needed. Let’s say that the office has 5 rows and 4 columns.

const numOfMonitors = monitorCount (5, 4);

//To check that the function worked properly, log numOfMonitors to the console.

console.log(numOfMonitors);


//HELPER FUNCTIONS

//Now let’s write another function that uses the monitorCount function to figure out the price.
//Below monitorCount Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns. Leave the function body empty for now.

function monitorCount(rows, columns) {
  return rows * columns;
}

//Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
};

//Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.

const totalCost = costOfMonitors(5, 4);

//To check that the function worked properly, log totalCost to the console.

console.log(totalCost);


//FUNCTION EXPRESSIONS

//Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and the plant needs to be watered:

//Create a variable named plantNeedsWater using the const variable keyword.
//Assign an anonymous function that takes in a parameter of day to plantNeedsWater.

const plantNeedsWater = function (day, plantNeedsWater) {
  
};

//Now we need to add some code to the function body of plantNeedsWater():
//In the function body add an if conditional that checks day === 'Wednesday'.
//If the conditional is truthy, inside the if code block, use the return keyword to return true.


const plantNeedsWater = function (day, plantNeedsWater) {
  if (day === 'Wednesday'){
   return true;
  }  
};


//On days that aren’t 'Wednesday', plantNeedsWater() should return false:
//Add an else statement after the if statement.
//Inside the else statement use the return keyword to return false.

const plantNeedsWater = function (day, plantNeedsWater) {
  if (day === 'Wednesday'){
   return true;
  }  else {
      return false;
     }
};

//Call the plantNeedsWater() and pass in 'Tuesday' as an argument.

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));


//ARROW FUNCTIONS

//Old way 

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//Arrow function way

const plantNeedsWater = (day, plantNeedsWater) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//CONCISE BODY ARROW FUNCTIONS

//Let’s refactor plantNeedsWater() to be a concise body. Notice that we’ve already converted the if/else statement to a ternary operator to make the code fit on one line.

const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};


//refactored
const plantNeedsWater = day => day === 'Wednesday' ? true : false;


















