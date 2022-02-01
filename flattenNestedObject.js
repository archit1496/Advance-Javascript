let flattenObj={};
function flatten(object,type){
        for([key,value] of Object.entries(object))
        {

            if(typeof object[key]==='object')
            {
              
                flatten(object[key],type+"_"+key)

            } 
            else
            {
              flattenObj[type+"_"+key]=value;
            }
              
        }
        return flattenObj;
 }

let user = {
  name: "Archit",
  address: {
    personal: {
      city: "Prayagraj",
      area: "gautam",
    },
  },
};

console.log(flatten(user, "user"));
