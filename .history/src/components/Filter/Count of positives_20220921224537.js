function countPositivesSumNegatives(input) {
  let res1 = 0
  let res2 = 0
  if(input.length === 0 || typeOf input === null) {
   return []
  }
  input.map(item => {
    if(item > 0) {
      res1+=1
    } else {
      res2 += item
    }
  })
 
   return [res1, res2]
 }