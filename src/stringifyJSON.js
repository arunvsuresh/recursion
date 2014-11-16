// // // this is what you would do if you liked things to be easy:
// // // var stringifyJSON = JSON.stringify;

// // // but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  
  var JSON_string = "";

  // BASE CASES
  if (typeof obj === "number" || typeof obj === "boolean" || obj === null) {
    return String(obj);
  } else if (typeof obj === "string") {
    return "\"" + obj + "\"";
  } else if (Array.isArray(obj)) {
    var arrayString = "";
    for (var i = 0; i < obj.length; i++) {
      arrayString += stringifyJSON(obj[i]) + (i < obj.length - 1 ? ",": "");
    }
    return "[" + arrayString + "]";
  } else if (typeof obj === "function" || obj === undefined) {
    return "{" + JSON_string + "}";
  } else { // RECURSIVE CASE
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (typeof obj[key] === "undefined" || typeof obj[key] === "function") {
        continue;
      }
      JSON_string += stringifyJSON(key) + ":" + stringifyJSON(obj[key]);
      if (i < keys.length - 1) {
         JSON_string += ",";
      }
    }
  }
  return "{" + JSON_string + "}";
};




