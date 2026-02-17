import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex  py-4 px-8 bg-cyan-800  items-center justify-between'>
      <h2 className='text-xl font-bold'>Aryans</h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-meduim ' to ='/'>Home</Link>
        <Link className='text-lg font-meduim ' to ='/about'>About</Link>
        <Link className='text-lg font-meduim ' to ='/product'>Product</Link>


        
      </div>
    </div>
  )
}

export default Navbar
