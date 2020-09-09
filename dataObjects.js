
// static methods for objects
// Object.keys(obj) returns array of keys
// Object.values(obj) return array of values
// Object.entries(obj) // return array of both keys and values NB ecma2017

const players = {
"james":20,
"john":35,
"kate":58,
"gerald":20

const scoresArray = Object.values(obj)

const sum = scoresArray.reduce((init,val)=>{return init + val}, 0)
const average = sum/scoresArray.length // NB no parenthisis on length in javascript!
const passingArray = scoresArray.filter(val=>val>30)

const names = Object.keys(players)
