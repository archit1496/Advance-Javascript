function stopWatch() {
    let duration = 0;
    let currentInterval;
    let stopWatchRunning=false;
    this.start = function () {
        startStopWatch();
    }
    this.stop = function () {
        stopTheWatch();
    }
    this.duration = function () {
        return duration;
    }
    let startStopWatch = () => {
        
        if (stopWatchRunning) 
            throw new Error("already started")
       
        currentInterval = setInterval(() => {
            duration++;
        }, 1000);
        stopWatchRunning=true;   
        

    }

    let stopTheWatch = () => {
        if(!stopWatchRunning)
           throw new Error("not yet started")
            
        clearInterval(currentInterval);
        stopWatchRunning=false;
        
          
    }


}

let stopWatchObject = new stopWatch();
