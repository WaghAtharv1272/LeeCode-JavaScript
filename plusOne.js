function plusOne (array){
    let n =array.length;

    for (let i=n-1;i>=0;i--){
        array[i]=array[i]+1;
        if(array[i]<10){
            return array;
        }
        array[i]=0;
    }
    array.unshift(1);
    return array
}

let array =[1,2,3];
var ans =plusOne(array);
console.log(ans)