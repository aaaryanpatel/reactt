import React from 'react'
// once we set an item in localstorage it will be there even if we delete code or restart server 

// const age = localStorage.getItem('age')



// const user = localStorage.getItem('user')
// console.log(user)
// console.log(age)


// const user =  {
//   username: 'aryan', 
//   age: 18,
//   city:'regina'
// }

// console.log(user)

// // value should alwasys be in string form
// // localStorage.setItem('user', user) X
// localStorage.setItem('user', JSON.stringify(user))


// const user = JSON.parse(localStorage.getItem('user'))
// console.log(user)


const user =  {
  username: 'aryan', 
  age: 18,
  city:'reginas'
}

localStorage.setItem('user', JSON.stringify(user))
const usera = JSON.parse(localStorage.getItem('user'))
console.log(user)

const App = () => {
  return (
    <div>
      App
    </div>
  )
}

export default App
App