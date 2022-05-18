function timeConversion(s) {
  let l = s.length
  let modifier = [l - 2] + [l - 1]
  let [hour, minute, second] = s.split(":")
  if (hour === "12") {
    hour = "00"
  }
  if (modifier === "PM") {
    hour = hour + "12"
  }
  return `${hour}:${minute}:${second}`
}
console.log(timeConversion("12:01:00"))
