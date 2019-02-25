// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(driver => {
    return driver.toLowerCase();
  });
}

function nameToAttributes(array) {
  return fullNameDrivers = array.map(driver => {
    split_drivers = driver.split(" ")
    return Object.assign({firstName: split_drivers[0], lastName: split_drivers[1]});
  });
}

function attributesToPhrase(array) {
  return array.map(driver => {
    return `${driver.name} is from ${driver.hometown}`
  });
}
