// eslint-disable-next-line no-unused-vars
const peopleThatHaveUsedAlarm = [
  { name: "James", wakeUpTime: 7 },
  { name: "Susan", wakeUpTime: 13 },
  { name: "Geoff", wakeUpTime: 14 },
  { name: "Lisa", wakeUpTime: 6 }
];

function wakeup(currentTime) {
  // currentTime will be a Javascript Date object
  // https://www.w3schools.com/jsref/jsref_obj_date.asp
  const currentHour = currentTime.getHours();

  switch (currentHour) {
    case 12:
    case 13:
    case 14:
    return "Yessssss its lunch time!!!";
    break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    return "Ugggggh its too early - I'm not waking up yet";
    break;
  default:
    return "Get up!! You're wasting the day";
    break;
  }
  // alternative conditional statements for current hour processing
 // if (currentHour  < 12) {
  //  return "Ugggggh its too early - I'm not waking up yet";
  //}  else if (currentHour >=12 && currentHour <=14) {
   // return "Yessssss its lunch time!!!";
  //} else {
   // return "Get up!! You're wasting the day";
  //}
}

function snooze() {
  let snoozeAttempts = 0;

  while (snoozeAttempts < 20) {
    snoozeAttempts++;
  }

  return snoozeAttempts;
}
 // Alternative loop method for snooze
 //for (let i = 0; i < 20; i++) {
//  snoozeAttempts++;
//}

//return snoozeAttempts;
//}

// function to list names of alarm users
function alarmUsers () {
  // store alarm users in an array - names only
  let namesofPeople = [];
  peopleThatHaveUsedAlarm.forEach(function(person) {
    namesofPeople.push(person.name);
  });
  // need to return values in function
  return namesofPeople;
  }

//}

module.exports = {
  wakeup,
  snooze,
  alarmUsers
};
