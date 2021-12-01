function setIntervalPolyfill(callback,delay){
    let timer;
    function repeat(){
       timer=setTimeout(()=>{
            callback();
            if(timer)
            {
                repeat();
            }
        },delay)
    }
    repeat();
}

setIntervalPolyfill(()=>console.log("hey"),1000)
