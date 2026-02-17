import React from 'react'

const Navbar = (props) => {
    console.log(props);

    function changeTheme() {
        console.log('theme change', theme);
        props.setTheme('dark')
    }
    
  return (
    <div>
      <button>change theme</button>
    </div>
  )
}

export default Navbar
