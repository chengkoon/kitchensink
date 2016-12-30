// string: it should just console log it
// number: it should square it and console log the result
// boolean: it should console log either 'yes' or 'no'
// function: it should invoke the function()
// undefined: it should scold the user of the function for passing in bad data

// array: loop through each element and console log it
// object: loop through each key and console log the value there
// null: is also technically an object so you can work out how to check for that

var kitchenSink = function(dish) {
  if (typeof dish === 'string') {
    console.log(dish);
  }
  else if (typeof dish === 'number') {
    console.log(dish*dish);
  }
  else if (typeof dish === 'boolean') {
    if (dish) {
      console.log('true2');
    }
    else {
      console.log('false2');
    }
  }
  else if (typeof dish === 'function') {
    dish();
  }
  else if (Array.isArray(dish)) {
    dish.map(function(elem) {
      console.log(elem);
    })
  }
  else if (typeof dish ==='object') {
    for (prop in dish) {
      console.log(dish[prop]);
    }
  }
  else if (typeof dish === 'undefined') {
    console.log('Please give an input that is a string, number, boolean, or function!');
  }
}

var testForDishFunction = function() {
  console.log("dishFunction is invoked");
}
var obj = {
  name:"haha",
  id:"12345"
}
kitchenSink(obj)
