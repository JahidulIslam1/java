function randomRange(myMin, myMax){
return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myrandom = randomRange(5, 15);

console.log(myrandom);