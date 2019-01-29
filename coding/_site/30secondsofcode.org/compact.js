/*
Removes falsey values from an array.

Use Array.filter() to filter out falsey values(false, null, 0, "", undefined, and NaN).
*/

const compact = arr => arr.filter(Boolean);