import React, { useState } from 'react'
import Modal from './Modal'
import Modals from './Modals'

const Cart = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='cart'>
      {show==true?<Modals el={el} setshow={setshow} />:null}
      <img onClick={()=>setshow(true)} src={el.image} alt="" />
    </div>
  )
}

export default Cart
