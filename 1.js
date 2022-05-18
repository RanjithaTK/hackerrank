let strings = ["ab", "ab", "abc"]
let queries = ["ab", "abc", "bc"]

let obj = {}
for (let i = 0; i < strings.length; i++) {
  if (obj[strings[i]]) {
    //if i=0 ; obj(ab)=1 if i=1 ; obj(ab)=2 if i = 2;obj(abc)=1
    obj[strings[i]]++
  } else {
    obj[strings[i]] = 1
  }
}
result = []
for (let i = 0; i < queries.length; i++) {
  // if i=0;obj(ab)=2 2 will be pushed to result
  if (obj[queries[i]]) {
    //if i=1;obj(abc)=1 1 will b pushed to result
    result.push(obj[queries[i]]) //if i=2; obj(bc)=0 else condtn 0 will b pushed
  } else {
    result.push(0)
  }
}
console.log(result)

// results = [2,1,0]
// const matchStrings = (strings, queries) => {
//   let results = []
//   let count = 0
//   for (let i = 0; i < queries.length; i++) {
//     for (let j = 0; j < strings.length; j++) {
//       if (queries[i] === strings[j]) {
//         count++
//       }
//     }
//     results.push(count)
//   }
//   return results
// }
// console.log(matchStrings(strings, queries))

// function matchString(strings, queries) {
//   return strings.some((item) => queries.includes(item))
// }
// console.log(matchString(strings, queries))
