
  
  const throttle = (fn, limit) => {
    let flag = true;
    return function(){
      let context = this;
      let args = arguments;
      if(flag){
        fn.apply(context, args);
        flag = false;
        setTimeout(() => {
          flag=true;
        }, limit);
      }
    }
  }
  window.addEventListener('resize', throttle(function() {
    return console.log('Hey archit! It is', new Date().toUTCString());
  }, 3000));