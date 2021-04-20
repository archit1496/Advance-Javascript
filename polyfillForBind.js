let name1={
    firstName:"archit",
    lastName:"jaiswal"
}

let printFullName=function(city,phoneno){
    console.log(this.firstName+" "+this.lastName +" " +city +" "+phoneno)
}



Function.prototype.myBind=function(...args){
    let obj=this;
    let parameters=args.splice(1);
    return function(){
        obj.apply(args[0],parameters)
    }
}

let newfun =printFullName.myBind(name1,"alld","90008888");
newfun();