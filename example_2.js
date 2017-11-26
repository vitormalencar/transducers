// reducer :: acc => value => acc

const reducer = (accumulation, value) => {
  return accumulation + value
}

reducer(10, 5)
const res = reducer('hello', 'paul')
reducer(res, 'again')

const example = [1, 2, 3, 4, 5].reduce(reducer, 0)

const objReducer = (acc, obj) => ({
  ...acc,
  ...obj
})

const user = {
  name: 'paul',
  email: 'paul@test.test'
}

objReducer(user, { nickname: 'Pauly D' })

const setReducer = (acc, value) => {
  return acc.add(value)
}

const mySet = new Set([1, 2, 3, 4])

setReducer(mySet, 4)
