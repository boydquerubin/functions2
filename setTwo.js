////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

// CODE HERE
// const multiply = new Function('Num1', 'Num2', 'return Num1 * Num2')
// console.log(multiply(2, 6));
function multiply(Num1, Num2, callback) {
  const answer = Num1 * Num2;
  callback(answer);
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

multiply(4, 3, answer => {
  console.log('The answer is ' + answer) //should console.log 12
})



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.



////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 
const names = ["Eric", "Bob", "John"];

function first(arr, callback) {
  if (arr.length > 0) {
    callback(arr[0]);
  } else {
    console.error("The array is empty.");
  }
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

first(names, firstName => {
  console.log('The first name in names is ' + firstName)
})



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE
function last(arr, callback) {
  if (arr.length > 0) {
    const lastIndex = arr.length - 1;
    callback(arr[lastIndex]);
  } else {
    console.error("The array is empty.");
  }
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

last(names, lastName => {
  console.log('The last name in names is ' + lastName)
})



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 
function contains(arr, name, callback) {
  if (arr.includes(name)) {
    callback(true);
  } else {
    callback(false);
  }
}

const names = ["John", "Jane", "Joe", "Janice"];

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

contains(names, 'Colt', result => {
  if(result === true){
    console.log('Colt is in the array')
  } else {
    console.log('Colt is not in the array')
  }
})



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE
const array1 = []

function uniq(arr, callback) {

}
/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE
function uniq(arr, callback) {
  const uniqueArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    
    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        isDuplicate = true;
        break;
      }
    }
    
    if (!isDuplicate) {
      uniqueArray.push(arr[i]);
    }
  }
  
  callback(uniqueArray);
}

const originalArray = [1, 2, 2, 3, 4, 4, 5, 6, 6];

uniq(originalArray, modifiedArray => {
  console.log(modifiedArray);
});



////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE 
function each(namesArray, callback) {
  for (let i = 0; i < namesArray.length; i++) {
    const name = namesArray[i];
    callback(name, i);
  }
}

const names = ["Alice", "Bob", "Charlie", "David"];

each(names, (name, index) => {
  console.log(`Name: ${name}, Index: ${index}`);
});


/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two parameters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE
const names = ["Alice", "Bob", "Charlie", "David"];

function printItemAtIndex(item, index) {
  console.log(`The item at index ${index} is ${item}.`);
}

each(names, printItemAtIndex);





////////// CHALLENGES //////////


////////// CHALLENGE 1 //////////


/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE
function addingFactory(number1) {
  return function (number2) {
    return number1 + number2;
  };
}

const addFive = addingFactory(5); 
const result = addFive(7); 
console.log(result); 

/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE
const addTen = addingFactory(10);

const result1 = addTen(5);
const result2 = addTen(20);

console.log(result1);
console.log(result2);

/*
  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE
const addTen = addingFactory(10);

const result1 = addTen(5); 
const result2 = addTen(20);

console.log(result1); 
console.log(result2);

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE
const add7 = addingFactory(7);

const result3 = add7(3); 
const result4 = add7(10);

console.log(result3);
console.log(result4);




////////// CHALLENGE 2 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
  You'll learn about objects in our next lecture. But you can research objects and attempt this problem.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

// CODE HERE 
function getUserById(users, id, callback) {
  for (const user of users) {
    if (user.id === id) {
      callback(user);
      return;
    }
  }

  callback(null);
}

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];

getUserById(users, 2, user => {
  if (user) {
    console.log(`Found user: ${user.name}`);
  } else {
    console.log('User not found');
  }
});



// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

getUserById(users, '16t', user => {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
})