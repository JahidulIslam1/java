var myArray = [2,3,4,5,6];
var arrayLength = 0;

for(var i = 0; i < myArray.length; i++){
arrayLength += myArray[i];
}
console.log(arrayLength);


//nested for loop


function multiplyAll(arr){
    var product = 1;
    for(var i=0; i < arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);