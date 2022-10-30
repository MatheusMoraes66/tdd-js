import { describe, expect, it } from 'vitest'
import { canReconfigure } from '../scripts'

describe('canReconfigure', () => {
  it('should be a function', () => {
    expect(typeof canReconfigure).toBe('function')
  })

  it('should menssage error if first parameter is missing', () => {
    expect(() => canReconfigure()).toThrow()
  })

  it('should message error if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  it('should message error if second parameter is not string', () => {
    expect(() => canReconfigure('a')).toThrow()
  })
})
