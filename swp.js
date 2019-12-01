function swp(a,fI,sI){
    let tmp=a[fI]
    a[fI]=a[sI]

      a[sI]=tmp
}
// let b=[4,6,7,9,1,0,2,5]
// console.log(b)
 let a=[4,6,7,9,1,0,2,5]
// console.log(b)
// let fs= require("readline-sync");
// let x=fs.questionFloat(`enter the firs index:` )
// let y=fs.questionFloat(`enter the  seconnd index:` )
// for(let i=0;i<1;i+=1)
// {
    
//     swp(b,x,y)

// }
// console.log(b)
let n = a.length
let x=n*0.5
for(let i=0;i<n/2;i+=1)
{
    swp(a,i,x+i)
}
console.log(a)