console.log('start')

/*
function loginUser(email, password) {
  setTimeout(() => {
    return { userEmail: email }
  }, 2000)
}
*/
/*
const user = loginUser('joe@joe.com','123456')
console.log user
*/

// as a callback (add the callback argument to the loginUser and change the return to the function in setTimeout

function loginUser(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email })
  }, 2000)
}

function getUserVideos(email, callback) {
  setTimeout(() => {
    callback(['video1', 'video2', 'video3'])
  }, 1000)
}

const user = loginUser('joe@joe.com', '123456', user => {
  console.log(user)
  getUserVideos(user.userEmail, videos => {
    console.log(videos)
  })
})

console.log('end')
