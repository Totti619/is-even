# World's largest isEven function 🌍
With the help of all the community we will try to create the world's largest function to check if a number is even or odd

## How to contribute?
- What you will need?
    - Git
    - Node
    - Yarn (optional)
- Clone the repository to your local machine

```git clone https://github.com/Totti619/is-even.git```

- Install packages and dependencies

```yarn install``` or ```npm install```

- Checkout to a new branch

```git checkout -b feature-is-number-{your number}-even```

- Do some code! ⛏
Open src/isEven.ts
### The wrong way ❌ (Do not do this! 🙈):
This is too less code and that's not cool :(

```
const isEven = (number: number): boolean =>  {
    if (number % 2 == 0)
		return true;
	return false;
}
```

### The right way ✅ (Do this 😎):
Go to the end of the file (press End on you keyboard) and add another 'if' line next to the last one with the next number, checking if that number is even (return true) or odd (return false)

```
const isEven = (number: number): boolean =>  {
    if (number === 0) return true
  + if (number === {your_number}) return false
    return false
}
```
Create some testing:
In test/, create a new file and name it {your_number}.spec.ts

Example testing code:
```
import isEven from '../src/isEven'
it('should say {your_number} is/is not even', async() => {
    expect(isEven({your_number})).toBe(false)
    expect(isEven({your_number})).not.toBe(true)
})
```

- Test your code! ✔

```yarn test``` or ```npm test```

- Commit your changes

- Push your commit and go to the repo PRs

```https://github.com/Totti619/is-even/pulls```

If your changes pass all the tests and look cool I (or some authorized contributor) will merge your PR
