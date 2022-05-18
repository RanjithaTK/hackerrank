let arr = [1, 1, 0, -1, -1]

function plusMinus(arr) {
  let x = arr.length
  let countPostv = 0
  let countNgtv = 0
  let countZero = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      countPostv++
    }
    if (arr[i] < 0) {
      countNgtv++
    }
    if (arr[i] === 0) {
      countZero++
    }
  }
  console.log((countPostv / x).toPrecision(6))
  console.log((countNgtv / x).toPrecision(6))
  console.log((countZero / x).toPrecision(6))
}
plusMinus(arr)
