import React from 'react'
import Modal from './Modal'
import Card from './Card'
const Listecar = ( ) => {
let Cars=[
  {
    image:"https://luxecars.co.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-3.35.41-PM-400x250.jpeg",
    name:"MERCEDES BENZ CLA 200 D SPORTS",
    Year:"2016",
    owenrs:"single owner",
    price:"₹2,300,000.00 MERCEDES BENZ CLA 200 D SPORTS"
  },
  {
    image:"https://luxecars.co.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-17-at-3.58.04-PM-3-400x250.jpeg",
    name:"LEXUS NX 300 H Luxury",
    Year:"2019",
    owenrs:"single owner",
    price:"₹5,275,000.00 LEXUS NX 300 H Luxury"
  },
  {
    image:"https://luxecars.co.in/wp-content/uploads/2024/07/Coming-Soon-19-400x250.png",
    name:"LEXUS ES 300 H LUXURY",
    Year:"2017",
    owenrs:"single owner",
    price:"₹2,300,000.00"
  },
  {
    image:"https://luxecars.co.in/wp-content/uploads/2024/07/Coming-Soon-18-400x250.png",
    name:"LEXUS NX 350 H",
    Year:"2022",
    owenrs:"single owner",
    price:"₹0.00 LEXUS NX 350 H"
  },
  {
    image:"https://luxecars.co.in/wp-content/uploads/2024/07/Coming-Soon-16-400x250.png",
    name:"Jeep Meridian",
    Year:"2020",
    owenrs:"single owner",
    price:"₹5.00"
  },
  {
    image:"https://luxecars.co.in/wp-content/uploads/2024/07/Coming-Soon-15-400x250.png",
    name:"LEXUS LS 500 H",
    Year:" 2019",
    owenrs:"single owner",
    price:"₹0.00 LEXUS LS 500 H"
  },
  {
    image:"https://luxecars.co.in/wp-content/uploads/2024/07/Coming-Soon-17-400x250.png",
    name:"BMW X1 SDRIVE 20D",
    Year:"2018",
    owenrs:"single owner",
    price:"₹0.00 BMW X1 SDRIVE 20D"
  },
  {
    image:"https://luxecars.co.in/wp-content/uploads/2024/07/Coming-Soon-20-400x250.png",
    name:"LEXUS ES 300 H EXQUISITE",
    Year:"2022",
    owenrs:"single owner",
    price:"₹0.00 LEXUS ES 300 H EXQUISITE"
  },
  {
    image:"https://luxecars.co.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-03-at-10.24.19-AM-400x250.jpeg",
    name:"VOLVO XC 40 T4 AT PETROL",
    Year:"2019",
    owenrs:"single owner",
    price:"₹4,250,000.00 VOLVO XC 40"
  },
  {
    image:"https://luxecars.co.in/wp-content/uploads/2024/06/WhatsApp-Image-2024-06-05-at-1.05.56-PM-2-400x250.jpeg",
    name:"BMW X1 Expedition",
    Year:"2018",
    owenrs:"single owner",
    price:" ₹2,100,000.00"
  },
]
  return (
    <div className='liste'>
    <h1 className='hoho'><h1>Buy A CAR</h1></h1>
        {Cars.map(el=><Card el={el} />)}
    </div>
  )
}

export default Listecar
