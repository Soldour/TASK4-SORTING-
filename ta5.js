function swp_row(a,fI,sI){
    let tmp=a[fI]
    a[fI]=a[sI]

      a[sI]=tmp
}
let a = [
    [1, 2, 3.5],
    [-10, 0, -7],
    [91, 6, 4]
 ]
 console.table(a)
 for(let i=0;i<1;i+=1)
{
    
  swp_row(a,Math.abs(2),Math.abs(0))

}
 console.table(a)