//Given an array with an even number of elements, swap its halves:
function swp(a,fI,sI){
    let tmp=a[fI]
    a[fI]=a[sI]

      a[sI]=tmp
}
let a=[ 4, 6, 7, 9, 1, 0, 2, 5 ]
console.log(a)
let n = a.length
let x=n*0.5
for(let i=0;i<n/2;i+=1)
{
    swp(a,i,x+i)
}
console.log(a)