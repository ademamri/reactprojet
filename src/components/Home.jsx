import React, { useState } from 'react'
import Navbar from './Navbar'
import Listecar from './Listecar'
import About from './About'
import { useNavigate } from 'react-router-dom'

const Home = () => { 
 
  const [search, setsearch] = useState("")
  return (
    <div>
 <Navbar search={search}/>
 <About setsearch={setsearch}/>
    </div>
  )
}

export default Home
