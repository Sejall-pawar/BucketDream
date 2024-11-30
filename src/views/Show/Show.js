import React, { useEffect, useState } from 'react'
import './Show.css'
import HomeButton from "./../../components/Homebutton/Homebutton"
import WishCard from '../../components/WishCard/WishCard';

function Show() {

  const [wishes, setwish] = useState([]);

  useEffect(()=>{
    const savedwish = JSON.parse(localStorage.getItem("wishes")) ||
    [];

    setwish(savedwish)
  }, []);
   



  return (
    <div>
      <h1 className='show'>Show Wish 📖</h1>
      {
        wishes.map((wish, index)=>{
          const {title, description, targetDate, category} = wish;

          return (
           <WishCard
           index={index}
           title={title}
           description={description}
           targetdate={targetDate}
           category={category}
           />
          )
        })
      }
      

      <HomeButton/>
    </div>
  )
}

export default Show