import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='bg-slate-700 text-white fixed top-0 left-0 right-0 p-12 z-50'>
      <div className='flex justify-between items-center'>
        <h1 className='font-bold uppercase text-5xl pl-32'><Link to={''}>Start Framework</Link></h1>
        <ul className='flex space-x-8 text-2xl font-bold uppercase pr-16'> 
          <li><NavLink to={'about'}>About</NavLink></li>
          <li><NavLink to={'Portfolio'}>Portfolio</NavLink></li>
          <li><NavLink to={'contact'}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
