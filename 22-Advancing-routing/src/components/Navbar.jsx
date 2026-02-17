import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  py-4 px-8 bg-cyan-800  items-center justify-between'>
      <h2 className='text-xl font-bold'>Aryans</h2>
      <div className='flex gap-10'>
        <a className='text-lg font-meduim' href="/">Home</a>
        <a className='text-lg font-meduim' href="/about">About</a>
        <a className='text-lg font-meduim' href="/product">productt</a>
      </div>
    </div>
  )
}

export default Navbar
