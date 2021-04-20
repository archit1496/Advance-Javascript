var timeoutFunction=()=>{
    console.log("settimeout function called");
}

var setTimeout=(fn,timeout)=>{
    let timer;
    let currentTime=new Date().getTime();

    let last=()=>{
        if(new Date().getTime() >= currentTime+timeout)
        {
           clearInterval(timer);
           fn();
        }
    }
    timer=setInterval(last,300)
}

setTimeout(timeoutFunction,3000)
