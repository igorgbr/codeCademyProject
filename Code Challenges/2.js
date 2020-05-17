// Write a function, agreeOrDisagree(), that takes in two 
// , and returns 'You agree!' if the two strings 
// are the same and 'You disagree!' if the two 
// strings are different.

// Write your function here:
const agreeOrDisagree = (strOne, strTwo) => strOne === strTwo ? `You agree!` : `You disagree!`;
// Uncomment the line below when you're ready to try out your function
console.log(agreeOrDisagree("yep", "yep")) 
// Should print 'You agree!'
// We encourage you to add more function call of your own to test your code!
console.log(agreeOrDisagree("yep", "notyep")) 
console.log(agreeOrDisagree("fine", "fine")) 
console.log(agreeOrDisagree("corinthians", "palmeiras")) 