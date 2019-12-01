function swp(a,fI,sI){
    let tmp=a[fI]
    a[fI]=a[sI]

      a[sI]=tmp
}
let b=[4,6,7,9,1,0,2,5]
console.log(b)
 let a=[4,6,7,9,1,0,2,5]
console.log(b)
let fs= require("readline-sync");
 let x=fs.questionFloat(`enter the firs index:` )
let y=fs.questionFloat(`enter the  seconnd index:` )
for(let i=0;i<1;i+=1)
{
    
    swp(b,Math.abs(x),Math.abs(y)) // converts any input intiger in to positive 

}
console.log(b)
let n = a.length
let k=n*0.5
for(let i=0;i<n/2;i+=1)
{
    swp(a,i,k+i)
}
console.log(a)
