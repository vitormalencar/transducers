const myString = 'hello'

myString.toUpperCase()

const toUpper = str => str.toUpperCase()

toUpper(myString)

const shout = str => `${str}!!`

const result = shout(myString)

const scream = str => toUpper(shout(str))

scream(myString)

