
// \d -->  0-9
const pattern2 = {
    phoneNumber:/^\(?(\d\d\d)[-.)](\d\d\d)[-.](\d\d\d\d)$/ || /^\(?\d{3}[-.)](\d{3})[-.]\d{4}$/,
}

console.log(pattern2.phoneNumber.exec('(123)756-7865'));
console.log(pattern2.phoneNumber.exec('123-756-7865'));
console.log(pattern2.phoneNumber.exec('123.756.7865'));

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