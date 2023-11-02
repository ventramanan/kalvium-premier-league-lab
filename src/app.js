//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

function createManager(managerName,managerAge,currentTeam,trophiesWon){
  var details=[managerName,managerAge,currentTeam,trophiesWon]
  return details
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation){
  if (formation.length===0){
    return null
  }
  else{
    return{
    defender:formation[0],
    midfield:formation[1],
    forward:formation[2],
  }

  }

}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  return players.filter((player)=>player.debut==year)
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  return players.filter((player)=>player.position==position)
}
//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  return players.filter((playerAwardTimes)=>{
    return playerAwardTimes.awards.some((awarded)=>awarded.name==awardName)
  })
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){
  return players.filter((playerAwardTimes)=>{
    let awards=playerAwardTimes.awards.filter((times)=>times.name==awardName)
    return awards.length===noOfTimes
  })
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country){
  return players.filter((playerAwardCountry)=>{
    let awardCountry=playerAwardCountry.awards.some((awardCountry)=>awardCountry.name==awardName)
    return awardCountry && playerAwardCountry.country===country
  })
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age){
  return players.filter((playerAwardAge) => {
    var ans = playerAwardAge.awards.length >= noOfAwards && playerAwardAge.team === team && playerAwardAge.age <= age
    return ans
  })
}
//Progression 9 - Sort players in descending order of their age

function SortByAge(){
  return players.age.sort(x,y) = y.age - x.age}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxsortByNoOfAwards(){
  return players.awards.sort(x,y) = y.awards - x.awards
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function SortByNamexAwardxTimes(awardName, noOfTimes, country){
  let average = filterByAwardxTimes(awardName,noOfTimes)
  let output = average.filter(function(item){
    return item.country === country
  })
  return output;
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  let yonger = players.filter(function(item){
    return item.age > age
  })
  yonger.sort(function(i){
    return i.name
  })

  let bright =  players.filter(function(item){
      return item.awards.sort(function(x,y){
        return x.year - y.year
      })
  })
  return bright
}
