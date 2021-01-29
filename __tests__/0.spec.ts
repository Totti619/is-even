import isEven from '../src/isEven'
it('should say 0 is even', async() => {
    expect(isEven(0)).toBe(true)
})