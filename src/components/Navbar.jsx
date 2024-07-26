import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = (search) => {
  const Navigate=useNavigate()
  return (
    <div className='nav'>
      <img src="https://luxecars.co.in/wp-content/uploads/2023/04/logo-white-and-red-80.png" alt="" />
      <ul>
        <li onClick={()=>Navigate("/home")} >HOME</li>
        <li onClick={()=>Navigate("/bycar")}>Buy A CAR</li>
        <li onClick={()=>Navigate("/sellcar")} >SELL A CAR</li>
       <li onClick={()=>Navigate("/")}>log out</li> 
       <box-icon color="maroon" type='solid' name='cart'></box-icon>
        
      </ul>
    </div>
  )
}

export default Navbar
