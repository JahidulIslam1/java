function checkEqual(a,b){
    return a === b ? true : false;//ternary operator procedure
}
console.log(checkEqual(1,1));


//or 
function checkEq(a,b){
    return a === b ; //normal procedure
}
console.log(checkEq(1,1));

//nested ternary operator

function checkSign(num){
    return num > 0 ? "positive" : num <0 ? "negative" : "zero" ; //normal procedure
}
console.log(checkSign(0));