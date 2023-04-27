import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'

export default function DashboardLayout() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="drawer drawer-mobile ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-start mt-10">
<Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay "></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link to='/Dashboard'>My Service</Link></li>
   
    </ul>
  
  </div>
</div>

        <Footer/>
    </div>
  )
}
