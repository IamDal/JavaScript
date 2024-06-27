// Generate a randome race number
let raceNumber = Math.floor(Math.random() * 1000);

// Randomly set registration to true or false
let regValue = [true,false];
let earlyRegistration = regValue[Math.floor(Math.random() * 2)];

// Generate a random age
let age = Math.floor(Math.random() * 36);

// Set conditionals for adults and children
const adult = age > 18;
const youth = age < 18;

// Adult Registrations
if (adult) {
  raceNumber += 1000;

  // For Early registration
  if (earlyRegistration) {
    console.log(`Contestant Number: ${raceNumber}, your race time is at 9:30 am. Good luck!`);
    console.log(adult);

  // For late registration
  } else {
    console.log(`Contestant Number: ${raceNumber}, your race time is at 11:00 am. Good luck!`);
  }

// youth registration
} else if (youth) {
  console.log(`Contestant Number: ${raceNumber}, Youth registrants run at 12:30 pm (regardless of registration)`);

// For 18 year old young adults
} else {
  console.log('See registration desk.')
}
