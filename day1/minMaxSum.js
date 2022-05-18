let arr = [1, 3, 5, 7, 9]
function minMaxSum(arr) {
  arr.sort(function (a, b) {
    return a - b
  })

  let minSum = 0
  for (let i = 0; i < 4; i++) {
    minSum = minSum + arr[i]
  }
  let maxSum = 0
  for (let i = 4; i > 0; i--) {
    maxSum = maxSum + arr[i]
  }
  console.log("minSum : " + minSum)
  console.log("maxSum : " + maxSum)
}

minMaxSum(arr)
