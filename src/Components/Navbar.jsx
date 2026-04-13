import logo from '../assets/logo.png'
import { BiHomeAlt2 } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from 'react-router';
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <img src={logo} alt="Logo"/>
    </a>
  </div>
  
  <div className="navbar-end">
    <NavLink to={'/'} className={({ isActive }) => isActive ? "btn bg-[#244d3f] text-white" : "btn"}><BiHomeAlt2 /> Home </NavLink>
    <NavLink to={'/timeline'} className={({ isActive }) => isActive ? "btn bg-[#244d3f] text-white" : "btn"}><CiClock2 /> Timeline</NavLink>
    <NavLink to={'/stats'} className={({ isActive }) => isActive ? "btn bg-[#244d3f] text-white" : "btn"}><ImStatsDots />Stats</NavLink>
    
  </div>
</div>
    </div>
  )
}

export default Navbar
