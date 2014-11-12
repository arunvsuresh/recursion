// // // this is what you would do if you liked things to be easy:
// // // var stringifyJSON = JSON.stringify;

// // // but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  
  var JSON_string = "{";
  // BASE CASES
  if (Array.isArray(obj)) {
    var resultArr = "[";
    if (obj.length > 0) {
      // inspect each element in array
      for (var i = 0; i < obj.length; i++) {
        if (obj.indexOf(obj[i]) != obj.length - 1) {
          resultArr += stringifyJSON(obj[i]) + ",";
        }
        else {
          resultArr += stringifyJSON(obj[i]);
        }
      }
    }
    return resultArr += "]";
  }

  else {
    if (typeof obj === "string") {
      return "\"" + obj + "\"";
    }
    if (typeof obj === "number" || typeof obj === "boolean") {
      return obj.toString();
    }
    
    if (obj === null) {
      return "null";
    }
    else {
      
      for (var key in obj) {
        if (typeof obj[key] === "function" || typeof obj[key] === undefined) {
          return JSON_string + "}";
        }
        var keys = Object.keys(obj);
        if (keys.indexOf(key) != keys.length - 1) {
          JSON_string += stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",";
        }
        else {
          JSON_string += stringifyJSON(key) + ":" + stringifyJSON(obj[key])
        }
      }
    }
    
  }
  
  return JSON_string + "}";
};






