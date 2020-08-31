const uniqueArrayValues = (arrayIn) => {
  const newSet = new Set()
  // sort ascending
  arrayIn.sort((a,b)=>{return a-b})
  arrayIn.forEach(value=>newSet.add(value))
  return [...newSet]
}
