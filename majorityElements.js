/*Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array. */
function majorityElement(nums){
    let candidate=null;
    let count =0;

    for (let num of nums){
        if (count === 0){
            candidate = num;
        }
    count += (num === candidate) ? 1 : -1;  
    }

    return candidate;
}

let nums=[3,2,3,2,3];
var ans= majorityElement(nums);
console.log(ans)