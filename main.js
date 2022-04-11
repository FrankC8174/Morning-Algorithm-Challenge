/**
 * ::::::::::::::::::::::::::::: Thurs April 7:::::::::::::::::::::::::::::::::::::::::
 * Morning Algorithm Challenge 1
 * Write a function that takes in a number (minutes), then 
 * converts it to seconds. Print "that is a lot of seconds" 
 * when the seconds is above 5000 seconds.
 */

/**
  * Morning Algorithm Challenge 2
  * Write a function that takes in an array of letters. 
  * Convert the array into an object that has 
  * each value as a key and its value should be true if it 
  * is a vowel or false if it is not. Print the object to 
  * the screen.
  */




//   :::::::::::::::::::::::::: challenge 1 ::::::::::::::::::::::::::::
/**  for the first chalenge:  
 * 1.I created the function and named it convert.
 * 2.I was told to take in a interger in  minutes as a argument.
 * 3. was instructed to log a statement when the mins exceeded 5000 which I converted to minutes which was 83.333333333 which I rounded down to 83 minutes. so any thing exceeding 83 mins would log out that's alot of minutes. we did this with a if/else statement. 
 * 4. console.log and called the convert funtion and passed in our arguments.
 * 
 * 
 * 
 * 
 * */
// function convert(minutes) {
//     if (minutes > 83) {
//         console.log("that's alot of minutes")
//     }
//     else {
//         return minutes * 60
//     }
//     return minutes * 60

// }


// console.log(convert(84)); 


//:::::::::::::::::::::::::::::: chalemge 2 :::::::::::::::::::::::::::::::::::
//

function vowelCheck (array) {
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // let letters = []

// convert array to object

const obj = Object.assign({},letters);

obj.forEach((key.index) => {
    console.log(`${key}: ${courses[key]}`);
});

// for ( let i=0; i<obj.length;i++) {
//     if (obj)
// }


// console.log(obj); // test to see if conversion was operational.
}
vowelCheck( );




// if (array === 'a', 'e', 'i', 'o', 'u') {
//     console.log('a:true');
//     console.log('e:true');
//     console.log('i:true');
//     console.log('o:true');
//     console.log('u:true');

// }
// else {
//     console.log('all others are not vowels!!')
// }

