function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let ptr1 = 1;

    for (let ptr2 = 1; ptr2 < nums.length; ptr2++) {
        if (nums[ptr2] !== nums[ptr2 - 1]) {
            nums[ptr1] = nums[ptr2];
            ptr1++;
        }
    }

    return ptr1;
}
const nums = [1, 1, 2];
var ans = removeDuplicates(nums);
console.log(ans);
console.log(nums.slice(0, ans));
