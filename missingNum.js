/*Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. */
function missingNumber(nums) {
    
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;

   
    const actualSum = nums.reduce((acc, num) => acc + num, 0);

    
    return expectedSum - actualSum;
}


const nums = [3, 0, 1];
console.log(missingNumber(nums)); 
