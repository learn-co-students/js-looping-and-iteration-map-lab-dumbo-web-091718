// Code your solution in this file.
function lowerCaseDrivers(array) {
  const lowerDrivers = array.map(function(driver) {
    return driver.toLowerCase();
  });
	return lowerDrivers
}

function nameToAttributes(array) {
  const fullNameDrivers = array.map(function(driver) {
    split_drivers = driver.split(" ")
    return Object.assign({firstName: split_drivers[0], lastName: split_drivers[1]});
  });
  return fullNameDrivers
}

function attributesToPhrase(array) {
  const driverHometown = array.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
  return driverHometown
}
