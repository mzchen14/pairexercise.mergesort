function split(wholeArray) {
  const half = Math.floor(wholeArray.length/2)
  const firstHalf = wholeArray.splice(0, half)
  const secondHalf = wholeArray
  return [firstHalf, secondHalf]
}

function merge(firstHalf, secondHalf){
  let result = []
  while(firstHalf.length && secondHalf.length){
      if(firstHalf[0] < secondHalf[0]){
        result.push(firstHalf[0])
        firstHalf.shift()
      } else {
        result.push(secondHalf[0])
        secondHalf.shift()
      }
  }
  if(firstHalf.length){
    result = result.concat(firstHalf)
  }
  if(secondHalf.length){
    result = result.concat(secondHalf)
  }
  return result
}


function mergeSort(array) {
  if(array.length <=1){
    return array
  }
  else {
    const splitted = split(array)
    return merge(
      mergeSort(splitted[0]), mergeSort(splitted[1])
    )
  }
}
