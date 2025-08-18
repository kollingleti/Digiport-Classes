let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    } // ou + this.name +  ou person['name'] + ou person['age']
};  

console.log(person.name); // Output: John
console.log(person.age);  // Output: 30
console.log(person.greet()); // Output: Hello, my name is John and I am 30 years old.

//////////////////

// Objects are a way to store data in key-value pairs.
// Example: bird = {
//   name: "Sparrow",
//   age: 1,
//   sings: true,
// };

// Exercises:

// 1. Simple object
// Make an object 'cat' with 'name', 'color', and 'age'.
// Show the values in the console.


let cat = {    
    name: "Manuel",
    color: "Siamese",
    age: 2
};

console.log(cat.name);   // Output: Manuel
console.log(cat.color);  // Output: Siamese
console.log(cat.age);    // Output: 2

// 2. Add and change
// Add 'toy' to the cat object.
// Change the 'age' to another number.

cat.toy = "Lagartixa";
cat.age = 3;

console.log(cat.toy);   // Output: Lagartixa
console.log(cat.age);   // Output: 3

// 3. Object with method
// Make an object 'dog' with 'name', 'breed',
// and a method 'bark()' that prints "Woof!".

let dog = {
    name: "Moon",
    breed: "Chihuahua",
    bark: function () {
        console.log("Woof!"); //ou usar return "Woof!";
    }
};

console.log(dog.name);  // Output: Rex
console.log(dog.breed); // Output: Labrador
dog.bark();             // Output: Woof!  


// 4. Array of objects
// Make an array 'market' with 3 products.
// Each product has 'name' and 'price'.
// Print the name of each product along with its price.

let market = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.5 },
    { name: "Orange", price: 0.8 }
];

for (let i = 0; i < market.length; i++) {
    console.log(`Product: ${market[i].name}, Price: $${market[i].price}`);
}   

// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.

let movie = {
    title: "Harry Potter",
    director: "J.K. Rowling",
    review: {
        rating: 10.0,
        comment: "My favorite movie."
    }
};

console.log(
    `Rating: ${movie.review.rating}, Comment: ${movie.review.comment}`); 
console.log(movie.title + " by " + movie.director) + movie.review ; // Output: Harry Potter by J.K. Rowling

// 6. For...in to sum values
// We have an object 'scores' with points from 3 players.
// Use a for...in loop to add all the points together
// and print the total.

let scores = {
    player1: 10,
    player2: 15,
    player3: 20
};
let totalPoints = 0;
for (let player in scores) {
    totalPoints += scores[player];
}
console.log(`Total points: ${totalPoints}`); // Output: Total points: 45

 
