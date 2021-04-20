

const debounceBtn=document.getElementById("debounce");
const debounce = (func, delay) => {
    let debounce;
    return function(){
        const context=this;
        let args=arguments;
        clearInterval(debounce)
        debounce=setTimeout(()=>{
           func.apply(context,args)
        },delay)
    }
}
debounceBtn.addEventListener('click', debounce(function() {
    console.info('Hey! It is', new Date().toUTCString());
  }, 3000));



