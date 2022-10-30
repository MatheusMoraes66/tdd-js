export function fizzbuzz (number) {
  if (typeof number !== 'number') throw new Error('This parameter is null')
  if (Number.isNaN(number)) throw new Error('This parameter is not a number')

  if (((number % 3) === 0) && ((number % 5) === 0)) return 'fizzbuzz'

  if ((number % 3) === 0) return 'fizz'

  if ((number % 5) === 0) return 'buzz'

  return number
}

export function countingSheep (sheeps) {
  if (!Array.isArray(sheeps)) throw new Error('This parameter is not a list')
  if (sheeps.length <= 0) throw new Error('This list is empty')

  const parameterOfObject = { 1: 'name', 2: 'color' }

  sheeps.forEach((sheep) => {
    if (sheep[parameterOfObject[1]] === undefined || sheep[parameterOfObject[2]] === undefined) throw new Error('This object list is incorrect')
  })

  const sheepsList = sheeps.filter((sheep) => sheep.color === 'red')

  console.log(sheepsList)
  return sheepsList
}

export function canReconfigure (from, to) {
  if (typeof from === 'string') throw new Error('from is not a string')
  if (typeof to === 'string') throw new Error('to is not a string')
}
