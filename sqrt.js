/*Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
  */
function mySqrt(num){

    const squareRoot=Math.sqrt(num);
    return Math.floor(squareRoot);
}

let num = 9;
var ans = mySqrt(num);
console.log(ans) 