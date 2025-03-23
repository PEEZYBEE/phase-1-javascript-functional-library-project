// myEach: Iterates over a collection (array or object) and calls the callback function
function myEach(collection, callback) {
    // Check if collection is an array
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      // If it's an object, iterate over the object keys
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection; // Ensure the collection is returned
  }
  
  // myMap: Creates a new array with the results of calling a provided function on every element in the collection
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(value, index, collection) {
      result.push(callback(value, index, collection));
    });
    return result;
  }
  
  // myReduce: Reduces a collection to a single value by applying a function to each element
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    // Handle arrays
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], i, collection);
      }
    } else {
      // Handle objects
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          accumulator = callback(accumulator, collection[key], key, collection);
        }
      }
    }
  
    return accumulator; // Return the final reduced value
  }
  
  // myFind: Returns the first element in the collection that satisfies the provided testing function
  function myFind(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
    return undefined;
  }
  
  // myFilter: Returns a new array with all elements that pass the test implemented by the provided function
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function(value) {
      if (predicate(value)) {
        result.push(value);
      }
    });
    return result;
  }
  
  // mySize: Returns the size of the collection (either array length or object key count)
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // myFirst: Returns the first element of the collection (or the first n elements if n is specified)
  function myFirst(collection, n) {
    if (n === undefined) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
  
  // myLast: Returns the last element of the collection (or the last n elements if n is specified)
  function myLast(collection, n) {
    if (n === undefined) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  }
  
  // myKeys: Returns an array of an object's own enumerable property names
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues: Returns an array of an object's own enumerable property values
  function myValues(object) {
    return Object.values(object);
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues,
  };
  