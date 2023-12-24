function multiply(x){
   //const a=3;
   let y=7;
    return x+y
}
function addtwo(x,y){
    console.log(x,y)
    return multiply(y+x)

}
 //console.log(addtwo(2,3));
const m1=[1,2,3,4]
const m2=m1.map(multiply)

const m3=m1.reduce((old,cur)=>addtwo(old,cur),0)
console.log(m1,m2,m3);
//1,0-8
//2,8-17
//3,17-27
//4,27-38