import { doubleTheNumber, evenOnly } from './utils'

const filter = (predicate) => reducer => {
  return (accumulation, value) => {
    if (predicate(value)) {
      return reducer(accumulation, value)
    }
    return accumulation
  }
}

const map = xf => reducer => {
  return (accumulation, value) => {
    reducer(accumulation, xf(value))
    return accumulation
  }
}

const filterThatDoubles = predicate => {
  return (accumulation, value) => {
    if (predicate(value)) {
      return map(doubleTheNumber)(accumulation, value)
    }
    return accumulation
  }
}

[1, 2, 3, 4].reduce(filterThatDoubles(evenOnly), [])


const isEvenFilter = filter(evenOnly)
const isNot2Filter = filter(val => val !== 2)
const doubleMap = map(doubleTheNumber)

const pushReducer = (accumulation, value) => {
  accumulation.push(value)
  return accumulation
}

[1, 2, 3, 4].reduce(isNot2Filter(isEvenFilter(doubleMap(pushReducer))), [])
