const numArr = [4,5.6,-9.8,3.14,42,6,8.3,-2];
const squaredList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squaredIntegers;
}
const squaredIntegers = squaredList(numArr);
console.log(squaredIntegers);