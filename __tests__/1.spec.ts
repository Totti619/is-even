import isEven from '../src/isEven'
it('should say 1 is not even', async() => {
    expect(isEven(1)).toBe(false)
    expect(isEven(1)).not.toBe(true)
})