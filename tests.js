var index = require('./index.js');

if (index.name === "Gleison") {
  console.log(`Your name: ${index.name}`);
} else {
  console.log(`Expected: Gleison, returned: ${index.name}`);
}

if(index.height === 74) {
  console.log(`Your height: ${index.height}`);
}  else {
  console.log(`Expected: 74, returned: ${index.height}`);
}
