/*Given an integer num, repeatedly add all its digits until the result has only one digit, and return it. 
*/
function addDigits(num){

    let rem=0;
   
    while(num>=10){
         let sum=0;
    while(num!=0){
        rem =num%10;
        sum =sum+rem;
        num=Math.floor(num/10);   
        } 
    num=sum;
    
}   return num;
}

let num=38;
var ans=addDigits(num);
console.log(ans)