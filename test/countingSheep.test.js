import { beforeEach, describe, expect, it } from 'vitest'
import { countingSheep } from '../scripts'

const sheepListEmpty = []
const sheepListError = []
const sheepList = []
let respondeSheep = []

beforeEach(() => {
  sheepListError.push({ name: 'Noa' })
  sheepListError.push({ color: 'blue' })
  sheepList.push({ name: 'Noa', color: 'blue' })
  sheepList.push({ name: 'Euge', color: 'blue' })
  sheepList.push({ name: 'Navidad', color: 'red' })
  sheepList.push({ name: 'Ki Na Ma', color: 'red' })
  sheepList.push({ name: 'AAAAAaaaaa', color: 'red' })
  sheepList.push({ name: 'Nnnnnnnn', color: 'red' })

  respondeSheep = sheepList.filter(sheep => sheep.color === 'red')
})

describe('countingSheep', () => {
  it('should be a function', () => {
    expect(typeof countingSheep).toBe('function')
  })

  it('should show a error if parameter is null', () => {
    expect(() => countingSheep()).toThrow('This parameter is not a list')
  })

  it('should show a error if parameter is a object void', () => {
    expect(() => countingSheep(sheepListEmpty)).toThrow('This list is empty')
  })

  it('should show a error if list object undefined', () => {
    expect(() => countingSheep(sheepListError)).toThrow('This object list is incorrect')
  })

  it('should return a empty list if not find color red', () => {
    expect(countingSheep(sheepList)).toBe(respondeSheep)
  })
})
