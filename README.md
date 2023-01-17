# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @xallending/lotide`

**Require it:**

`const _ = require('@xallending/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArrayEquals(arr1, arr2)`: checks if given arr1 is equal to arr2, console logs whether it was a pass or fail.
* `assertEqual(actual, expected)`: checks if actual is equal to expected and console logs whether it was a pass or fail.
* `assertObjectEqual(actual, expected)`: checks if actual object given is equal to expected object and console logs if it was a pass or a fail.
* `countLetters(sentence)`: receives a given sentence and counts the amount of times each letter appears.
* `countOnly(allItems, itemsToCount)`: receives a given object and an item to count and counts the amount of times the item appears in the object.
* `eqArrays(arr1, arr2)`: receives an arr1 and arr2 and checks to see if the arrays are equal.
* `eqObjects(object1, object2)`: receives an object1 and object2 and checks to see if the objects are equal.
* `findKeys(object, callback)`: receives an object and a callback function and returns the key of the matching truth value outputted from the callback function.
* `findKeysByValue(obj, value)`: receives an object and a value and returns the corresponding key from the value.
* `head(arr)`: returns the first element of a given array.
* `letterPositions(sentence)`: returns the index position(s) of a letter from a given sentence.
* `map(array, callback)`: returns an array of the letter at index position when given an array of strings.
* `middle(arr)`: returns the middle index of an array. If the array is even, it will return the middle index and middle index-1.
* `tail(arr)`: returns the length of the resulting array not including the first index.
* `takeUntil(array, callback)`: receives an array and a callback function and returns the array up until the condition of the callback function is satisfied.
* `without(source, itemsToRemove)`: receives a source array and an item to remove from the array and returns the array without the given item input.