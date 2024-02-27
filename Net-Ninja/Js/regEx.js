/* 
use structured approach make this text more detailed explaination,usage, functionality with examples and steps for doing

*/

// What is RegEx?

let regExMe = /sarfraj/gi;

console.log(regExMe.test('sarfraj'));

// character-set
 regExMe = /[s^a-rt-z]arfraj/gi

 console.log(regExMe.test('sarfraj'));

//  range

regExMe = /[a-zA-Z]arfraj/gi

console.log(regExMe.test('sarfraj'));
regExMe = /[0-9]arfraj/
console.log(regExMe.test('0arfraj sarfraj,1arfraj'));

// repeating character

regExMe = /[0-9]+/
console.log(regExMe.exec('01234456'));
regExMe = /[0-z]{1,3}/
console.log(regExMe.exec('1256778aabca'));

// MetaCharacters
regExMe = /\d{3}\s{3}\w{8}/
console.log(regExMe.exec('1256   778aabca'));


// special characters

// ?
regExMe = /a[0-9]?/g
regExMe = /a\?/g
console.log(regExMe.exec('a24'));
console.log(regExMe.exec('a?'));



// .

regExMe = /helpMe.+/g
// regExMe = /abc\./g
console.log(regExMe.exec('helpMeSarfraj_abc '));

// *
regExMe = /ab[a-z]*/g
// regExMe = /abc/g
console.log(regExMe.exec('abc.'));

// Starting & Ending Patterns
regExMe = /^[a-z]{1,4}[0-9]{1,}$/gi
console.log(regExMe.exec('sarf987687'));

// Alternate Characters

regExMe = /(kill|save|delete|add|update)? code/g
console.log(regExMe.exec('delete code'));


// practice

const pattern = {
    email:/^[a-zA-Z0-9._+%]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gi,

}

function makeEmail(name,domain){
    return `${name}@gmail.${domain}`
}

const myGmail = makeEmail('sarfraj',"com")

console.log(pattern.email.exec(myGmail));
