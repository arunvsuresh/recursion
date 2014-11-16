// // If life was easy, we could just do things the easy way:
// // var getElementsByClassName = function (className) {
// //   return document.getElementsByClassName(className);
// // };

// // But instead we're going to implement it from scratch:

var getElementsByClassName = function(className){
  // your code here

  // body of document (contains entire content)
  var body = document.body;

  // all the elements under the class name tree
  var foundElements = [];
  
  var findClass = function(element) {
    var elemList = element.classList;
    if (elemList) {
    	for (var i = 0; i < elemList.length; i++) {
    		if (elemList[i] === className) {
    			foundElements.push(element);
    		}
    	}
      var children = element.childNodes;
  	  for (var i = 0; i < children.length; i++) {
  	  	findClass(children[i]);
  	  }
  	}
  }

  findClass(body);
  
  return foundElements;

};

