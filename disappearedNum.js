function findDisappearedNumbers(nums) {
    const n = nums.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        const index = Math.abs(nums[i]) - 1;
        nums[index] = -Math.abs(nums[index]);
    } 
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
}
let nums = [4, 3, 2, 7, 8, 2, 3, 1];
var ans =(findDisappearedNumbers(nums));
console.log(ans)