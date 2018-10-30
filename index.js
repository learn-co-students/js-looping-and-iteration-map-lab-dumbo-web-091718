// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(names) {
  return names.map(name => {
    const [firstName, lastName] = name.split(' ')
    return {firstName, lastName}
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
  return `${driver.name} is from ${driver.hometown}`;
});
}
