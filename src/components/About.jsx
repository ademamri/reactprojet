import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Listecart from './Listecart'

const About = ({setsearch}) => {
    const Navigate=useNavigate()
  return (
    <div>
         <div className='car' >
      <h1>EXPERIENCE LUXURY</h1>
      <p>a premium line of luxury cars,
    luxe cars automatch brings comfort and class to your drive</p>
    <div className='but'><button onClick={()=>Navigate("/bycar")}>Buy A CAR</button>
    <button onClick={()=>Navigate("/sellcar")}>SELL A CAR</button></div>
        </div>
       <div className='about'>
        <img src="https://luxecars.co.in/wp-content/uploads/2023/03/DSC06925-scaled.jpg" alt="" />
       <div className='us'>
         <h1>ABOUT US</h1>
         <p>Luxe Cars by Automatch brings comfort and class to your drive with its range of premium,
          luxury and super luxury pre-owned cars of the most elite global brands. A venture by Popular Group, a trusted corporate with more than 75 years experience in the automobile field, with brands such as Nandi Toyota, Popular Hyundai, Lexus Bangalore, Popular Bajaj, Popular KTM, Popular JCB & Marina Harley Davidson under its umbrella. Popular Group through Luxe Cars ensures best in class customer experience and top quality cars through a transparent buying and selling process, Luxe Cars ensures the best in class, service and quality through their professionalism and seamless process.</p>
         </div>
       </div>
       <div className='love'>
        <h1>FIND CAR BY BRAND</h1>
       </div>
       <Listecart/>
    </div>
  )
}

export default About
