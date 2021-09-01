// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, column = "") {
  if (row === n) {
    return;
  }
  if (column.length === 2 * n - 1) {
    console.log(column);
    return pyramid(n, row + 1);
  }
  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= column.length && midpoint + row >= column.length) {
    add = "#";
  } else {
    add = " ";
  }
  pyramid(n, row, column + add);
}

module.exports = pyramid;
