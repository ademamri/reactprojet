import React from 'react'

const Modals = ({setshow,el}) => {
  return (
    <div className='modal'>
             <div className='box_modals'>
        <button onClick={()=>setshow(false)}>X</button>
        <h1>{el.brand}</h1>
        <h2>{el.price}</h2>
      </div>
    </div>
  )
}

export default Modals
