let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function findMedian(arr) {
  arr.sort(function (a, b) {
    return a - b
  })
  let i = arr.length / 2 - 1
  //   console.log(i)

  let j = arr.length / 2
  //   console.log(j)

  if (arr.length % 2 === 0) {
    median = (arr[i] + arr[j]) / 2
  } else {
    median = arr[Math.floor(j)]
  }
  console.log(median)
}
findMedian(arr)
