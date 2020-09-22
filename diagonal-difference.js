// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  let n = arr.length;
  let dif1 = 0;
  let dif2 = 0;
  for (let i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i === j) {
        dif1 += arr[i][j];
      }
      if (i + j === n - 1) {
        dif2 += arr[i][j];
      }
    }
  }
  return Math.abs(dif1 - dif2);
}
