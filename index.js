// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let lowerCaseDrivers = drivers.map(function(driver) {
    return driver.toLowerCase()
  })
  return lowerCaseDrivers
}

function nameToAttributes(drivers) {
  let foundDrivers = drivers.map(function(driver){
    let first = driver.split(' ')[0]
    let last = driver.split(' ')[1]

    return {firstName: first, lastName: last}
  })
  return foundDrivers
}

function attributesToPhrase(drivers) {
  let drivObj = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
  return drivObj
}
