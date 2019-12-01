//Given one array and two indexes with start 
//and end positions, create new array
// and copy all values from the first array 
//starting from start position to the end positio
let a=[ 4, 6, 7, 9, 1, 0, 2, 5 ]
let from =1
let to=5
let len=to-from+1
let b=Array(len)

for(let i=0; i<len; i++)
{
    b[i]=a[from+i]
}
console.log(b)