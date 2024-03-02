// \d -->  0-9
const pattern2 = {
  phoneNumber:
    /^\(?(\d\d\d)[-.)](\d\d\d)[-.](\d\d\d\d)$/ ||
    /^\(?\d{3}[-.)](\d{3})[-.]\d{4}$/,
};

console.log(pattern2.phoneNumber.exec("(123)756-7865"));
console.log(pattern2.phoneNumber.exec("123-756-7865"));
console.log(pattern2.phoneNumber.exec("123.756.7865"));

// helllo call me 879-678-3454
// sarfraj.123asas@gmail.com
// sarfraj.123asas@femail.edu
// sarfraj.123asas@gheemail.net
// sarfraj.123asas@gheemail.cat

// sarfraj abbasi
// I Love You
// I Hate You
// I kill you

/* full capture group is --> $0
sub gp --> $1
sub gp --> $2 
.*?--> don't make  it greedy
*/
/* 
<a href="'https ://www  .source.com'">Google</a>bnan
<a href="'https://www.me.com'">me</a>asds
<a href="'https://www.Hello.com'">illHello</a>sdsa
<a href="'https://www.kill.com'">ill</a>asds */

// (\w+)\s\1

// rainbow rainbow me with me
// hate hate
// not not
// i i
// is some is is s some words some

var r = /^\d{3}$/;
var pattern = {
    matchMe:/\b[a-z]+\b/gi,
    matchPhone:/(\d{3})[-.]\d{4}/,
    splitMe:/(\W+)/
}

console.log(r.test("123"));

var s = "coding Challenges and word interactor with regular expressions and Programming with Text";
var p = "123-1234 and 345-4444 and 567-7777";

// match
const result = s.match(pattern.matchMe)
const result2 = p.match(pattern.matchPhone);
var result3;

// exec
// while(result3 = pattern.matchPhone.exec(p)){
//     console.log(result3);
    
// }

// split
const matchMe = s.split(pattern.splitMe) 


// replace
const rep = s.replace(/([aeiou])/g,"$1$1")
const rep1 = p.replace(/(\d{3})-(\d{4})/g,replacer)
function replacer(match,group1,group2){
    console.log(match);
    console.log(group1);
    console.log(group2);
    console.log(arguments);
    if(match.length == 1){
     
    }else{
        
        return match;
    }
}


console.log(result);
console.log(result2);
// console.log(result3);
// console.log(matchMe);
console.log(rep);
console.log(rep1);