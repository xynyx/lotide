const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[0], words[1]);
assertEqual(result[1], words[2]);