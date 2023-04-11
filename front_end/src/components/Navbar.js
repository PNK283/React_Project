import React from 'react'
import './Nav.css';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='NavbarIems'>
           <div className='navbar-header'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/f/f4/BMW_logo_%28gray%29.svg' 
                className='navbar-logo'
            />
            <h1 className='navbar-headername'>SCHOOL
            </h1>
            </div>

            <ul className='nav-menu'>
               <Link to='/home'><li className='nav-links-download'><a href='#'>Home</a>
               </li>
               </Link>
               <Link to='/aboutus'><li className='nav-links-download'><a href='#'>About us</a>
                 </li>
               </Link>
               <Link to='/admissions'><li className='nav-links-download'><a href='#'>Admissions</a>
                 </li>
               </Link>
               <Link to='/gallery'><li className='nav-links-download'><a href='#'>Gallery</a>
                 </li>
               </Link>
               <Link to='/facilities'><li className='nav-links-download'><a href='#'>Facilities</a>
                 </li>
               </Link>
               <Link to='/contact'><li className='nav-links-download'><a href='#'>Contact</a>
                 </li>
               </Link>
               <Link to='/enquiry'><li className='nav-links-download'><a href='#'>Enquiry</a>
                 </li>
               </Link>
            </ul>
        </nav>
       
    </div>
  )
}

export default Navbar
