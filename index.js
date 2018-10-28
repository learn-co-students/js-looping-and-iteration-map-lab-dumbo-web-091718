// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(lower=>lower.toLowerCase())
}
function nameToAttributes(array) {
  return array.map(ele =>{
    let nameArr = ele.split(' ');
    const nameObj = {
    'firstName': nameArr[0],
    'lastName': nameArr[1]
  };
  return nameObj;
  })
}


function attributesToPhrase(array){
  return array.map(driver=>{
    return driver['name']+' is from '+driver['hometown']
  })
}
