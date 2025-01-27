/*Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */
function containsDuplicate(nums){
    let arr=new Array();
    for (let i=0;i<=nums.length-1;i++){
       if(arr.includes(nums[i])){
        return true;
       }
       
        arr.push(nums[i]);
        
       }
       return false;
    }

let nums=[1,2,3,1];

containsDuplicate(nums);
