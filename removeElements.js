function removeElement (nums ,k){
    let writeptr=0;
    for (readptr=0;readptr<nums.length;readptr++){
        if(nums[readptr]!== k){
            nums[writeptr]=nums[readptr];
            writeptr++;
        }
    }
    return writeptr;
}
let nums =[2,3,3,2];
const k=3;
const ans= removeElement(nums,k);

console.log(ans);
console.log(nums.slice(0,ans));