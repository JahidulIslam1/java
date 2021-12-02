function gratherThan(val){
    if(val >= 100){
        return "equal 100";
    }
    if(val >= 10){
        return " equal 10";
    }
    return "not equal 10"
}
console.log(gratherThan(1));

function lessThan(val){
    if(val <= 6){
        return "over 6";
    }
    if(val <= 10){
        return " equal 10";
    }
    return "not equal 10"
}
console.log(lessThan(11));

function logicTest(val){
    if(val >= 50 && val <= 25){
        return "The value is grater than or equal to 25";
    }
    return "The value is less than or equal to 50"
}
console.log(logicTest(26));

function orTest(val){
    if(val < 50 || val > 25){
        return "The value is outside of 25";
    }
    return "The value is inside of 50"
}
console.log(orTest(26));

function ifStatement(val){
    var result = "";
    if(val > 5){
        result = "The result is bigger than 5"
    }
    else{
        result = "The result is less than 5"
    }
    return result;
}
console.log(ifStatement(4));

function elseifStatement(val){
    var result = "";
    if(val > 10){
        result = "The result is bigger than 10"
    }
    else if(val < 5){
        result = "The result is less than 5"
    }
   else{
       result = "The result is between 5 and 10"
   } 
   return result;
}
console.log(elseifStatement(7));