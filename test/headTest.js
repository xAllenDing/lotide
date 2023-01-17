const assertEqual = require('../assertEqual');
const head = require('../head');

// Test cases
(assertEqual(head([5,6,7]), 5));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["hi"]), "hi");
assertEqual(head([]), 5);