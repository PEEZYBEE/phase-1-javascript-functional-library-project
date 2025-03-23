// myEach: Iterates over a collection (array or object) and calls the callback function
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection; // Ensure the collection is returned
  }
  
  // myMap: Applies the callback to each element in the collection and returns a new array with the results
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  
  // myReduce: Reduces a collection to a single value by applying a function to each element
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : collection[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    // Handle objects and arrays
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], i, collection);
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          accumulator = callback(accumulator, collection[key], key, collection);
        }
      }
    }
  
    return accumulator;
  }
  
  // myFind: Returns the value if the callback evaluates to true
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
          return collection[key];
        }
      }
    }
    return undefined;
  }
  
  // myFilter: Filters the collection based on the callback and returns the new filtered array
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  
  // mySize: Returns the size of the collection (length for arrays, number of keys for objects)
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // myFirst: Returns the first element or the first n elements of the collection
  function myFirst(collection, n = 1) {
    if (Array.isArray(collection)) {
      return collection.slice(0, n);
    }
    return [];
  }
  
  // myLast: Returns the last element or the last n elements of the collection
  function myLast(collection, n = 1) {
    if (Array.isArray(collection)) {
      return collection.slice(-n);
    }
    return [];
  }
  
  // myKeys: Retrieves all the names of the object's own enumerable properties
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // myValues: Retrieves all the values of the object's own properties
  function myValues(object) {
    return Object.values(object);
  }
  
  
  
  