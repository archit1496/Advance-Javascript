
let value=require("./circle");

let c=new value.circle(5);
console.log(c)
console.log(c.draw())

// const stackarray=new WeakMap();
// class stack{
//     count;
//     constructor(){
//         stackarray.set(this,[]);
//         this.count=0;
//     }
//     push(value){

//         stackarray.get(this).push(value)
//         this.count++;
//     }
//     pop()
//     {
//        if(this.count<=0)
//           throw new Error("stack is empty");
    
//        console.log(stackarray.get(this).pop());
//        this.count--;
//     }
//     peek(){
//         if(this.count<=0)
//           throw new Error("stack is empty");
//         console.log(stackarray.get(this)[this.count-1])
//     }
// }

// let s=new stack();