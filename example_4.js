const doubleTheNumber = number => number * 2

const example1 = [1, 2, 3, 4].map(doubleTheNumber)

const evenOnly = number => number % 2 === 0

const doubleAndEven = number => doubleTheNumber(evenOnly(number))

example2 = [1, 2, 3].filter(doubleAndEven);

const map = (xf, array) => {
  return array.reduce((accumulation, value) => {
    accumulation.push(xf(value))
    return accumulation
  }, [])
}

map(doubleTheNumber, [1, 2, 3, 4])

const filter = (predicate, array) => {
  return array.reduce((accumulation, value) => {
    if (predicate(value)) {
      accumulation.push(value)
    }
    return accumulation
  }, [])
}

filter(evenOnly, [1, 2, 3, 4]
