// This is an array with the names of members of my family
// the array will be used as a key to iterate over

let myFamilyNames = ["matthew", "madelyn", "courtney"];

// this function will sort an array of names that will be 
// passed to it as a parameter

function sortNames(names) {
  for(let i = 0; i < names.length; i++) {
    names[i] = names[i].toLowerCase();
    /* 
      * The names will be compared to family member names
      * if there is a match then a new function will be called
      * and return a result if there is no match a seperate function
      * will be called
    */
   console.log(names[i]);
    for(let j = 0; j < myFamilyNames.length; j++) {
      
      if(names[i] === myFamilyNames[j]) {
        names[i] = familyData(names[i]);
      }
    }
  }
  console.log(names);
}

function familyData(familyName) {
  let personData = {};
  switch(familyName) {
    case "matthew":
      personData.firstName = "matthew";
      personData.age = "23";
      personData.eyeColor = "hazel";
      break;
    case "courtney":
      personData.firstName = "courtney";
      personData.age = "21";
      personData.eyeColor = "blue";
      break;
    case "madelyn":
      personData.firstName = "madelyn";
      personData.age = "1.5";
      personData.eyeColor = "blue";
      break;
    default:
      window.alert("this is not a family name");
      break;
  }
  personData.lastName = "lefevre";
  return personData;
}

let namesForSorting = ["joE", "matThew", "Bill", "CourTney", "stacy", "madelyn"];

sortNames(namesForSorting);