
const pattern2 = {
    phoneNumber:/\(?\d{3}[-.)](\d{3})[-.]\d{4}/
}

console.log(pattern2.phoneNumber.exec('(123)756-7865'));
console.log(pattern2.phoneNumber.exec('123-756-7865'));
console.log(pattern2.phoneNumber.exec('123.756.7865'));