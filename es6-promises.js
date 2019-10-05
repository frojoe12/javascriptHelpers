const myPromise = (seconds) => {
  return new Promise ((resolve, reject) => {
    console.log(`waiting for ${seconds} seconds`)

    setTimeout(()=> {
      reject(`5 seconds over - times up!`)
    },5000)

    setTimeout(()=> {
      resolve(`${seconds} has passed`)
    },seconds*1000)
  })
  return "finish"
}
myPromise(4).then(successMessage => {
  console.log(successMessage)
})
.catch(errorMessage => {
  console.log(errorMessage)
})
