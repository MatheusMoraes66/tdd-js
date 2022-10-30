import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../scripts'

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  })

  it('should show a error if parameter is null', () => {
    expect(() => fizzbuzz()).toThrow('This parameter is null')
  })

  it('should show a error if parameter is not a number', () => {
    expect(() => fizzbuzz(NaN)).toThrow('This parameter is not a number')
  })

  it('should show a mensage "fizz" if parameter is multiple 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should show a mensage "buzz" if parameter is multiple 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should show a mensage "fizzbuzz" if parameter is multiple 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })

  it('should return a number parameter if parameter is not multiple 3 and 5', () => {
    expect(fizzbuzz(1)).toBe(1)
  })
})
