function lowerCaseDrivers(drivers){
    return drivers.map(driver => driver.toLowerCase());
}
  

// 'Chris Webeber'
// 'Chris Weber'.split(' ) == ['Chris', 'Weber']
function nameToAttributes(names) {
    return names.map(name => {
        const [firstName, lastName] = name.split(' ')
        return { firstName: firstName, lastName: lastName }
    })
}

//"<NAME OF DRIVER> is from <HOMETOWN>"

function attributesToPhrase(names) {
    return names.map(driver => `${driver.name} is from ${driver.hometown}`)
}