var myStroge = {
    "car" : {
        "inside" : {
            "glove box" : "Maps",
            "passenger seat" : "Crumps"
        },
        "outsid" : {
            "trunk" : "Jack"
        }
    }
};
var myGloveBox = myStroge.car.inside["passenger seat"];
console.log(myGloveBox);

var myStroe = {
    "car" : {
        "inside" : {
            "glove box" : "Maps",
            "passenger seat" : "Crumps"
        },
        "outsid" : {
            "trunk" : "Jack"
        }
    }
};
var gloveBoxContent = myStroe.car.outsid.trunk;
console.log(gloveBoxContent);