import React from 'react'
import {NavLink} from  'react-router-dom'
 import styles from './Navbar.module.css'; 
export default function Navbar() {
  return (
    <header>
   <div className='container'>
      <nav>
        <ul className={styles.item}>
          <li>
            <NavLink  to='/'>Home </NavLink>
            </li>  
          <li>
          <NavLink  to='/singin'>Singin</NavLink>
            </li>  
          <li>
          <NavLink  to='/singup'>Singup</NavLink>
            </li> 
            <li>
          <NavLink  to='/cart'>Cart</NavLink>
            </li>  
            <li>
          <NavLink  to='/proucts'>Proucts</NavLink>
            </li> 
            <li>
          <NavLink  to='/catagrie'>Catagrie</NavLink>
            </li> 
             
        </ul>
        </nav>  
        </div>
    </header>
  )
}
