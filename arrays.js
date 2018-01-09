var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArrayBegin = [element, ...array]
  return newArrayBegin
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  var newArrayEnd = [...array, element]
  return newArrayEnd
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  var newArraySlice = array.slice(0)
  return newArraySlice.slice
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

