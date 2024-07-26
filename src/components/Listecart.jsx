import React from 'react'
import Cart from './Cart'

const Listecart = () => {
    let cart=[
        {
            image:"https://luxecars.co.in/wp-content/uploads/2023/03/DSC07049-scaled.jpg",
            brand:"Audi",
            price:"777745$"
        },
        {
            image:"https://luxecars.co.in/wp-content/uploads/2023/03/DSC07083-scaled.jpg",
            brand:"BMW",
            price:"1122443$"
        },
        {
            image:"https://luxecars.co.in/wp-content/uploads/2023/03/DSC06826-scaled.jpg",
            brand:"LEXUS",
            price:"444451$"
        },
        {
            image:"https://luxecars.co.in/wp-content/uploads/2023/04/MERCEDES-BENZ-CLA.jpg",
            brand:"MERCEDES BENZ",
            price:"99998$"
        },
        {
            image:"https://luxecars.co.in/wp-content/uploads/2023/04/LAND-CRUISER-COVER.png",
            brand:"TOYOTA",
            price:"755541$"
        },
        {
            image:"https://luxecars.co.in/wp-content/uploads/2017/01/P14_0596_a4_rgb-1.jpg",
            brand:"PORSHE",
            price:"4444444$"
        },
    ]
  return (
    <div className='liste'>
      {cart.map(el=><Cart el={el} />)}
    </div>
  )
}

export default Listecart
