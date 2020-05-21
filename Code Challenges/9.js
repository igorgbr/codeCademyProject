// A person’s number of imaginary friends are always 33% of their total friends.

// Write a function, numImaginaryFriends(), 
// that takes in the total number of friends a person 
// has and returns the number of imaginary friends they have.
// Write your function here:
const numImaginaryFriends = (totFriends) => Math.round (totFriends * .33);

// Uncomment the line below when you're ready to try out your function
console.log(numImaginaryFriends(18)) // Should print 6

// We encourage you to add more function calls of your own to test your code!
console.log(numImaginaryFriends(5))
console.log(numImaginaryFriends(9))
console.log(numImaginaryFriends(50))