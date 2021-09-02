console.log("You are AMAZING!");


/*
Let the TRUTH be known; what we know about functions
do a job
built to handle repeating tasks
must invoke with ()
multiple ways to write
must be defined
can be defined with and without parameters - pass in arguments
one or many parameters
arguments can be any data type
arguments can be functions
can be used for CRUD
use of RETURN
run functions within functions (inline or chaining)
*/

function getGreeting(taco){
	const newGreeting = `Good Morning, ${taco}`;
	return newGreeting;
}

//the following is the same thing as above
// const getGreeting = taco => `Good Morning, ${taco}`;

const user = {
	name: "Chris",
	id: 12,
	email: "Chris@nss.com"
}

const getGreetingNumber2 = (name, day, someNumber) => `Good ${day}, ${name.name}, ${someNumber}`;

console.log(getGreetingNumber2(user, "Thursday", user))



const hi = getGreeting("Brenda");
console.log(hi);

const hiThere = (nameString) => {
	//no other way to get inside other than invoking hiThere
	const morningGreeting = `Morning, ${nameString}`;
	return morningGreeting;
}
console.log(hiThere("Ben"));

const goodbye = nameString => `Goodbye, ${nameString}`;

console.log(goodbye("Gerson"));