import React from 'react'
import { Link } from 'react-router-dom'
import icon from '../assets/Image_Icon/Group 33092.png'
import useauth from '../hooks/UseAuth'
export default function Navbar() {
const {LoginNow,user,loading,signout} = useauth()


  return (
    <div className='bg-[#E5E5E5] '>
<div className="navbar w-4/5 mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li>Contact us</li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
    <img className='w-1/4' src={icon} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li ><Link to='/contact'>Contact us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
   { !user?.email ? <Link  to='/login'>     <a  className="btn bg-[#F63E7B] text-[#fff] border-0">Login </a>
  </Link> :  <a onClick={signout}  className="btn bg-[#F63E7B] text-[#fff] border-0">Logout </a>}
</div>
</div>
</div>
  )
}
