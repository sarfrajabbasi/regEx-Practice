// validation script here

var reg =  /[a-z]/gi;
// var reg2 = new RegExp(/[a-z]/,"gi");
// console.log(reg,reg2);

const patterns = {
    telephone :/^\d{11}$/,
    username:/^[a-z\d_?]{5,12}$/i,
    password:/^[\w@-]{8,20}$/,
    slug:/^[a-z\d-]{8,20}$/,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

}

const inputs = document.querySelectorAll("input");


// validation function

function validate(field,regEx){
    if(regEx.test(field.value)){
        field.className = "valid"
        // console.log(field.className);
        
    }else{
        field.className = "invalid"
        // console.log(field.className);

    }
    
}
inputs.forEach(input=>{
    input.addEventListener('keyup',(e)=>{
        validate(e.target,patterns[e.target.name])
    })
})