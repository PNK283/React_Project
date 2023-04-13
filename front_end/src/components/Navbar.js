import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav className='NavbarItems'>
         <div className='navbar-header'>
            <h1>School Name</h1>
         </div>
         <ul className='nav-menu'>
           <Link to='/home'><li className='nav-links-download'><a href='#'>Home</a>
           </li>
           </Link>
           <Link to='/about'><li className='nav-links-download'><a href='#'>About</a>
           </li>
           </Link>
           <Link to='/admissions'><li className='nav-links-download'><a href='#'>Admissions</a>
           </li>
           </Link>
           <Link to='/facilities'><li className='nav-links-download'><a href='#'>Facilities</a>
           </li>
           </Link>
           <Link to='/gallery'><li className='nav-links-download'><a href='#'>Gallery</a>
           </li>
           </Link>
           <Link to='/contact'><li className='nav-links-download'><a href='#'>Contact</a>
           </li>
           </Link>
           <Link to='/admissions'><li className='nav-links-download'><a href='#'>Enquiry</a>
           </li>
           </Link>
         </ul>
       </nav>
       
    </div>
  )
}

export default Navbar
