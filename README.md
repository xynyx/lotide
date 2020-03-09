# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @xynyx/lotide`

**Require it:**

`const _ = require('@xynyx/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Print whether arrays are equal or not
* `assertEqual(actual, expected)`: Compares two values to determine equality
* `assertObjectsEqual(object1, object2)`: Compare two objects for equality
* `countLetter(string)`: Counting number of letters in string, creating an object
* `countOnly(allItems, itemsToCount)`: Given values (itemsToCount), return number of found items as an integer
* `eqArrays(array1, array2)`: Compare arrays and return true if equal
* `eqArraysRecursion(array1, array2)`: Compare arrays using recursion
* `eqObjects(object1, object2)`: Compare objects for equality
* `eqObjectsRecursion(object1, object2)`: Compare objects for equality recursively
* `findKey(object, callback)`: Given a callback key, find and print the key in object
* `findKeyByValue(genres, show)`: Print key given an object (genres) and a value (show)
* `flatten(array)`: Combine nested arrays into one flat array
* `head(array)`: Given an array, return the first value
* `letterPositions(sentence)`: Return the index of each letter in a sentence
* `map(array, callback)`: Given a callback, modify the given array
* `middle(array)`: Given an array, return the middle value
* `tail(array)`: Given an array, return the values after the first value
* `takeUntil(array, callback)`: Given an array, return modified array, stopping at the inputted callback function
* `without(source, cut)`: Will return an array that removes given cut values