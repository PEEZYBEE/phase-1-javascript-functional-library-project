const { expect } = require('chai');
const {
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
} = require('./index');

describe('Testing myEach', function() {
  it('calls alert with each element passed', function() {
    const collection = [1, 2, 3];
    let result = [];
    myEach(collection, function(value) {
      result.push(value); // Capture the result
    });
    expect(result).to.eql([1, 2, 3]); // Use appropriate assertions
  });
});

describe('Testing myMap', function() {
  it('successfully returns a correctly populated array', function() {
    const collection = [1, 2, 3];
    const result = myMap(collection, function(value) {
      return value * 2;
    });
    expect(result).to.eql([2, 4, 6]);
  });
});

describe('Testing myReduce', function() {
  it('returns the correct reduced value when passed an initial value', function() {
    const collection = [1, 2, 3];
    const result = myReduce(collection, function(acc, value) {
      return acc + value;
    }, 0);
    expect(result).to.equal(6);
  });

  it('returns the correct reduced value when not passed an initial value', function() {
    const collection = [1, 2, 3];
    const result = myReduce(collection, function(acc, value) {
      return acc + value;
    });
    expect(result).to.equal(6);
  });
});

describe('Testing myFind', function() {
  it('returns the value if found', function() {
    const collection = [1, 2, 3, 4];
    const result = myFind(collection, function(value) {
      return value === 3;
    });
    expect(result).to.equal(3);
  });

  it('does not traverse the whole array if the value is found early', function() {
    const collection = [1, 2, 3, 4];
    let findCalled = false;
    const result = myFind(collection, function(value) {
      if (value === 3) {
        findCalled = true;
        return value;
      }
    });
    expect(findCalled).to.be.true;
    expect(result).to.equal(3);
  });

  it('returns undefined if the value is not present', function() {
    const collection = [1, 2, 3];
    const result = myFind(collection, function(value) {
      return value === 4;
    });
    expect(result).to.be.undefined;
  });
});

describe('Testing myFilter', function() {
  it('correctly filters for values that the callback evaluates as true', function() {
    const collection = [1, 2, 3, 4];
    const result = myFilter(collection, function(value) {
      return value > 2;
    });
    expect(result).to.eql([3, 4]);
  });

  it('correctly returns an empty array if no matching values are found', function() {
    const collection = [1, 2, 3];
    const result = myFilter(collection, function(value) {
      return value > 5;
    });
    expect(result).to.eql([]);
  });
});

describe('Testing mySize', function() {
  it('correctly returns the size of the collection when an array is passed', function() {
    const collection = [1, 2, 3];
    const result = mySize(collection);
    expect(result).to.equal(3);
  });

  it('correctly returns the size of the collection when an object is passed', function() {
    const collection = { a: 1, b: 2, c: 3 };
    const result = mySize(collection);
    expect(result).to.equal(3);
  });
});

describe('Testing myFirst', function() {
  it('returns the first element of the collection', function() {
    const collection = [1, 2, 3];
    const result = myFirst(collection);
    expect(result).to.equal(1);
  });

  it('returns the first n elements of the collection when the second optional argument (n) is provided', function() {
    const collection = [1, 2, 3];
    const result = myFirst(collection, 2);
    expect(result).to.eql([1, 2]);
  });
});

describe('Testing myLast', function() {
  it('returns the last element of the collection', function() {
    const collection = [1, 2, 3];
    const result = myLast(collection);
    expect(result).to.equal(3);
  });

  it('returns the last n elements of the collection when the second optional argument (n) is provided', function() {
    const collection = [1, 2, 3];
    const result = myLast(collection, 2);
    expect(result).to.eql([2, 3]);
  });
});

describe('Testing myKeys', function() {
  it('retrieves all the names of the object\'s own enumerable properties', function() {
    const object = { a: 1, b: 2 };
    const result = myKeys(object);
    expect(result).to.eql(['a', 'b']);
  });
});

describe('Testing myValues', function() {
  it('retrieves all the values of the object\'s own properties', function() {
    const object = { a: 1, b: 2 };
    const result = myValues(object);
    expect(result).to.eql([1, 2]);
  });
});
