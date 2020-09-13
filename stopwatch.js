function stopWatch() {
    let startTime, endtime, running, duration = 0;

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        },
        set:function(value){
            duration=value;
        }
    })
    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime;
        }
    })
    Object.defineProperty(this, 'endtime', {
        get: function () {
            return endtime;
        }
    })
    Object.defineProperty(this, 'running', {
        get: function () {
            return running;
        }
    })
}
stopWatch.prototype.start = function () {
    if (this.running)
        throw new Error("already running")

    this.running = true;
    this.startTime = new Date();
}

stopWatch.prototype.stop = function () {
    if (!this.running)
        throw new Error("not yet started")

    this.running = false;
    this.endtime = new Date();
    this.duration = (this.endtime.getTime() - this.startTime.getTime()) / 1000;
}

stopWatch.prototype.reset=function () {
    this.startTime = 0;
    this.endtime = 0;
    this.running = 0;
    this.duration = 0;
}

let stopobject = new stopWatch();