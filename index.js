// Code your solution in this file.

function lowerCaseDrivers(arr){
  return arr.map(i=>i.toLowerCase());
}

function nameToAttributes(arr) {
  return arr.map(i => {
  return{firstName: i.split(" ")[0], lastName: i.split(" ")[1]}
  })
}

function attributesToPhrase(arr) {
  return arr.map(i => `${i.name} is from ${i.hometown}`)
}
