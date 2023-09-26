// let dolpinsScore = [96,108,89];
// let koalasScore = [88,91,110];

// let dolpinsScore = [97,112,101]
// let koalasScore = [109,95,123]

let dolpinsScore = [97,112,101]
let koalasScore = [109,95,106]

let dolpinsAverage = 0;
for(let m of dolpinsScore)
dolpinsAverage+=m/dolpinsScore.length

let koalasAverage = 0;
for(let n of koalasScore)
koalasAverage+=n/koalasScore.length


if(dolpinsAverage > koalasAverage && dolpinsAverage >= 100){
  console.log(`Dolpins wins a trophy!. Dolpins have ${dolpinsAverage} and Koalas have ${koalasAverage}`)
}
else if(koalasAverage > dolpinsAverage && koalasAverage >= 100){
  console.log(`Koalas wins a trophy!. Koalas have ${koalasAverage} and Dolpins have ${dolpinsAverage}`)
}
else if(dolpinsAverage === koalasAverage && dolpinsAverage >= 100 && koalasAverage >= 100){
  console.log(`Draw!. Dolpins have ${dolpinsAverage} and  Koalas have ${koalasAverage}`)
}
else{
  console.log("Nobody wins a trophy!. Average is less than 100")
}