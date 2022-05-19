function diagonalDifference(arr) {
  let leftDiagonalSum = 0
  let rightDiagonalSum = 0
  let difference = 0
  let n = arr.length
  for (let i = 0; i < n; i++) {
    leftDiagonalSum = leftDiagonalSum + arr[i][i]
  }
  for (let i = n; i > 0; i--) {
    rightDiagonalSum = rightDiagonalSum + arr[i][n - i - 1]
  }
  console.log((difference = leftDiagonalSum - rightDiagonalSum))
}
diagonalDifference([[1, 2, 3], [(4, 5, 6)], [(7, 8, 9)]])
