function jahid(){
    console.log("hello, world");
}

jahid();

function nahid(){
    console.log("hi, world");
}

nahid();

function sahid(a,b){
    console.log(a-b);
}

sahid(10,5);

var myGlobal = 10;
function fun1(){
    oopsGlobal = 5;
}
function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined"){
        output += "myGlobal: " + myGlobal ;
    }
    if (typeof oopsGlobal != "undefined"){
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();