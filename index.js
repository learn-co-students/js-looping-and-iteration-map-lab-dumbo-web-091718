//✓ returns all drivers lowercased
//✓ does not modify the original array
function lowerCaseDrivers(drivers){
  const lowerCased = drivers.map((driver) => driver.toLowerCase());
  return lowerCased
}
//✓ returns list of objects with appropriate first and last names
function nameToAttributes(names) {
  let firstName, lastName;
  return names.map((name) => {
  let i = name.indexOf(" ")
  return {firstName: name.substr(0, i),lastName: name.substr(i + 1)};
  })
}
// ✓ converts to list saying the name and where each individual is from', () =>
 function attributesToPhrase(driversObjects){
   return driversObjects.map((obj) => {
     return`${obj.name} is from ${obj.hometown}`})
 }
