function flattenObject(data, parent) {
  let keyString = parent + "_";
  let flattenObject = {};
  flattenNestedObject(data, keyString, flattenObject);
  return flattenObject;
}
function flattenNestedObject(data, keyString, flattenObject) {
  for (let [key, value] of Object.entries(data)) {
    keyString += key + "_";
    if (typeof value === "object") {
      flattenNestedObject(value, keyString, flattenObject);
    } else {
      flattenObject[keyString.slice(0, keyString.length - 1)] = value;
    }
  }
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

console.log(flattenObject(user, "user"));
