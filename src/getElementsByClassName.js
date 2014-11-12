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

    if (element.classList) {
    	for (var i = 0; i < element.classList.length; i++) {
    		if (element.classList[i] === className) {
    			foundElements.push(element);
    		}
    	}
    	
  	  for (var i = 0; i < element.childNodes.length; i++) {
  	  	findClass(element.childNodes[i]);
  	  }

  	}

  }

  findClass(body);
  
  return foundElements;

};

