var myObj ={
    "gift" : "pony",
    "pet" : "ketten",
    "bed" : "sleigh"
};
function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp];
    }
    else{
        return "Not Found";
    }
}
console.log(checkObj("bed"));