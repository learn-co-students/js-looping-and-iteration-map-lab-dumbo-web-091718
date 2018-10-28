// Code your solution in this file.
function lowerCaseDrivers (array) {
  return array.map(function (el) { return el.toLowerCase(); });
}

function nameToAttributes (array) {
  return array.map(function (n) {
    let first = n.split(" ")[0];
    let last = n.split(" ")[1];

    return { firstName: first, lastName: last};
  });
}

function attributesToPhrase (array) {
  return array.map(function (a) { return `${a.name} is from ${a.hometown}`} );
}
