const findFirstNonRepeatingCharacter = input => {
  if (!input || typeof input === undefined || input === '') return 'no input'
  const data = {}
  let nonRepeatingCharacter
  let foundCharacter
  const arr = input.split('')
  arr.map(char => {
    if (!data[char]) {
      data[char] = 1
    } else {
      data[char]++
    }
  })
  arr.find(char => {
    if (data[char] === 1) {
      if (!foundCharacter) {
        nonRepeatingCharacter = char
      }
      foundCharacter = true
    }
  })
  if (foundCharacter) {
    return nonRepeatingCharacter
  } else {
    return '_'
  }
}

// add tests
// should return string 'no input'
console.log(findFirstNonRepeatingCharacter())
// should return 'p'
console.log(findFirstNonRepeatingCharacter('abcpabc'))
// should return '_'
console.log(findFirstNonRepeatingCharacter('abcpabcp'))
