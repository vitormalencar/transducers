// ArrayOfRandoms :: Int => int=> [Int]

const arrayofRandoms = randomCeil => length =>
  Array.from({ length }, (v, i) =>
    Math.floor(Math.random() * randomCeil))

const timeIt = (label, fn) => {
  console.time(label)
  fn()
  console.timeEnd(label)
}

const arrOfThousand = arrayofRandoms(100)(1000)
const arrofMilion = arrayofRandoms(100)(1e6)

const isEven = val => val % 2 === 0
const tripleIt = val => val * 3

// ​​​​​Thousand - map: 0.508ms​​​​​
timeIt('Thousand - map', () => {
  const resultFrom1000 = arrOfThousand.map(tripleIt)
})

// ​​​​​Thousand - map and Filter: 0.469ms​​​​​
timeIt('Thousand - map and Filter', () => {
  const resultFrom1000 = arrOfThousand
    .map(tripleIt)
    .filter(isEven)
})

// ​​​​​Million - map: 343.137ms​​​​​
timeIt('Million - map', () => {
  const resultFromMillion = arrofMilion.map(tripleIt)
})

// ​​​​​Million - map and Filter: 375.247ms​​​​​
timeIt('Million - map and Filter', () => {
  const resultFromMillion = arrofMilion
    .map(tripleIt)
    .filter(isEven)
})

// ​​​​​Million - imperative: 80.757ms​​​​​
timeIt('Million - imperative', () => {
  const result = []
  arrofMilion
    .forEach(val => {
      const tripled = tripleIt(val)
      if (isEven(tripled)) result.push(tripled)
    })
})
