let strings = ["ab", "ab", "abc"]
let queries = ["ab", "abc", "bc"]
// results = [2,1,0]
const matchStrings = (strings, queries) => {
  let results = []
  for (let i = 0; i < queries.length; i++) {
    let count = 0

    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        count++
      }
    }
    results.push(count)
  }
  return results
}
console.log(matchStrings(strings, queries))

function matchString(strings, queries) {
  return strings.some((item) => queries.includes(item))
}
console.log(matchString(strings, queries))
