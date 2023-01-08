import React from 'react'
import {GrNotes} from 'react-icons/gr'
import './style/Navbar.css'


const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <div className="icon">
            <GrNotes/>
            </div>
            <div className="right-bar">
                <h1 className='nav-heading'>React Redux Notes App</h1>
            </div>
        </nav>
    </div>
  )
}

export default Navbar