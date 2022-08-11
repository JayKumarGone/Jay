

function Birthday_Game(arr, D, M) {
  let numberOfWays = 0; // store the total number of ways
  let numberOfSquares = arr.length; // length of the segment
  for (let i = 0; i < numberOfSquares; i++) {
    let sum = 0; // sum of the integer on the squares
    if (i + M > numberOfSquares) {
      // sum of current index and M should be < length of the segment
      return numberOfWays;
    }
    for (let j = 0; j < M; j++) {
      sum += arr[i + j];
    }
    if (sum === D) {
      numberOfWays++;
    }
  }
  return numberOfWays;
}

console.log(Birthday_Game([2, 2, 1, 3, 2], 4, 2));