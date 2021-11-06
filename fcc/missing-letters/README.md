# Missing Letters

## Description

Find the missing letters in the passed letter range and return it.

If all letters are present in the range, return `undefined`.

Example:

> input: "abde"<br />
> return: "c"<br />
> Returned "c" because from "a" to "e", "c" is not present.<br />

> input: "abcde"<br />
> return: `undefined`<br />
> Returned `undefined` because character from "a" to "e" is present.<br />

## First Solution

1. Generate array of character from A to Z and make it lowercased.<br />

   This can be done by using `String.fromCharCode()` that returns a string
   created from the specified sequence of UTF-16 code units. Looking to
   ASCII table will make it easy.

   Code unit for character "A" is 65 and total length of alphabet is 26. So,
   by adding 0 to 26 with 65 (the start point) it will generate A to Z (and don't
   forget to make it lowercase using `.toLowerCase()`).

2. Find the start and the end of the range.<br />
3. Slice the generated A to Z array to have a same range as input. <br />

   A to Z array so it will have a new array that only contain a character from
   a specific range. For example:

   > input: "abce"<br />
   > sliced: ["a", "b", "c", "d", "e"];

4. Last, loop the new sliced array and compare it with the input string.

[Full solution here](./main.js)

## Second Solution

Utilizing `String.prototype.charCodeAt()` and `String.fromCharCode()`.

1. Loop through the input string.
2. Get the UTF-16 code unit from the string index by index.
3. Compare the current code unit of the string with code unit
   from string at zero index + current iteration.
4. If different, return the character from the code unit by
   using `String.fromCharCode(code - 1)`.
5. Other than that, return `undefined`.

[Full solution here](./main.js)
