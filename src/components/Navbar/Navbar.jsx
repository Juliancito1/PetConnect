import React from 'react'
import { Link } from 'react-router'
import logo from '../../images/heart-pawprint-svg-file.webp'
export const Navbar = () => {
  return (
    <nav>
      <section className='flex justify-around items-center bg-gray-100 py-4'>
        <div>
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="logo" className='w-10 h-10' />
            <h1 className='text-2xl font-bold'>Pet Connect</h1>
          </Link>
        </div>
        <div>Menu</div>
        <div>Login</div>
      </section>
    </nav>
  )
}
