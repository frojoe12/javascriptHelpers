const convertCSVtoArray = (input) => {
  return input.split(',').map(value=>value.trim())
}
