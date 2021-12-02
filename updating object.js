var testObj ={
    "hat" : "ballcap",
    "shirt" : "jersey",
    "shoe" : "cleats",
};

testObj.hat = "N/Y hat"

console.log(testObj.hat);

// adding new popertis in object

var testOb ={
    "hat" : "ballcap",
    "shirt" : "jersey",
    "shoe" : "cleats",
};

testOb["pant"] = "black pant";

console.log(testOb);

//deleting poperties from object

var testO ={
    "hat" : "ballcap",
    "shirt" : "jersey",
    "shoe" : "cleats",
    "pant" : "black pant",
};

delete testO.pant;

console.log(testO);

function ihatelookUp(val){
var result = "";

var lookUp = {
    "jahid" : "Arambagh",
    "muntasir" : "puran Dhaka",
    "abir" : "AGB colony"
}
result = lookUp[val];
return result;
}
console.log(ihatelookUp("abir"));


