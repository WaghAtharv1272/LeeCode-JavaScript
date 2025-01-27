/*Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/
function singleNumber (array) {
    let result = 0;
    for (let num of array) { 
        result ^= num;
    }
    return result;
}

let array = [2, 2, 1];
var ans = singleNumber (array);
console.log(ans); 
