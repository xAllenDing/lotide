const assertEqual = require('../assertEqual');
const head = require('../head');

//test code
(assertEqual(head([5,6,7]), 5));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["hi"]), "hi");
assertEqual(head([]), 5);