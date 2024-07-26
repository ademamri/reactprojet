import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Listecards = () => {
    const Navigate=useNavigate()
  return (
    <div className='add'>
       <div>  <h1>CREATE ACCOUNT</h1>
        <input type="text" placeholder='your name'/>
<input type="email" name="" id=""  placeholder='your email'/>
<input type="number" name="" id="" placeholder='your number' />
<input type="text" placeholder=' password' />
<input type="password" name="" id="" placeholder='confirm password' />
<button onClick={()=>Navigate("/home")} className='logi' >login</button></div>
    </div>
  )
}

export default Listecards
