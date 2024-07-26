import React from 'react'
import { useNavigate } from 'react-router-dom'

const  Login = () => {  
    const navigate=useNavigate() 
  return (
    <div className='gang'>
      <div><h1>LUXE CARS</h1>

      <input type="text" placeholder='user name' />
      <box-icon  color="aliceblue" name='user'></box-icon >
      <input type="password" placeholder='password' name="" id="" />
      <box-icon color="aliceblue" name='lock'></box-icon >
      <button onClick={()=>navigate("/home")} className='logi'>login</button>
      <button onClick={()=>navigate("/addaccount")} className='logi'>Add account</button>
      </div>
    </div>
  )
}

export default Login
