import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (

<>


    <div className='navbar'>
    <div>  <Link to="/create"  className='link'><p>Create</p></Link></div>
    <div> <Link to="/read" className='link'><p>read</p></Link></div>
    </div>
    </>
  )
}

export default Navbar