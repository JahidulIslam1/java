/*function testSwitch (val) {
    var answar=" ";
    switch (val) {
        case 1:
            answar = "alpha";
            break;
        case 2:
            answar = "beta";
            break;
        case 3:
            answar = "gamma";
            break;
        case 4:
            answar = "omega";
            break;
    }
return answar;

}
console.log(testSwitch(2));*/

function testSwitchStuffs (val) {
    var answar=" ";
    switch (val) {
        case "a":
            answar = "apple";
            break;
        case "b":
            answar = "banana";
            break;
        case "c":
            answar = "grap";
            break;
        case "d":
            answar = "orange";
            break;
        default:
            answar = "stuff"
            break;
    }
return answar;

}
console.log(testSwitchStuffs("a"));