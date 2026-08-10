const marvelHero = ["thor", "Ironman" , "spiderman"]
const dcHero = ["superman","flash","batman"]
const indHero = ["saktiman","krish","RA.One"]

/*
marvelHero.push(dcHero) // this push second array like [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvelHero);
*/
/*
const allHeros = marvelHero.concat(dcHero) // joints two arrays like [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// we can only concat two array, that might be different way but insted we can use spred operation
console.log(allHeros);

const allNewHeros = [...marvelHero,...dcHero , ...indHero] // spread operation used by ...
console.log(allNewHeros);
*/
const anotherArray = [1,3,2,[4,5,6],7,8,9,[12,23,[30,2],10]]
const realArray = anotherArray.flat(Infinity)
console.log(realArray);

console.log(Array.isArray("jaydeep")); // to check whether this is array or not
console.log((Array.from("jaydeep"))); // to convert into array
console.log((Array.from({name:"jaydeep"}))); // output is objects []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // to convert into single array




