import React from 'react'
import "./Home.css"
import one from "./pencil.png";
import two from "./checklist.png";
import three from "./party-popper.png";

function Home() {
  return (
    <div>
        <h1 className='title'>BucketDream</h1>
        <h2 className='tagline'>Dream it. Plan it. Live it.</h2>

        <div className='main-container'>
           <div className='sub-container'>
            <img src={one} className='img'/>
            <h1 className='line'>
            Got a dream you’ve always wanted to achieve? Don’t wait—add it to your list and make it a reality.            </h1>
           </div>
           <div className='sub-container'>
            <img src={two} className='img'/>
            <h1 className='line'>
            See all your dreams and plans in one place. Stay organized and track your progress.
            </h1>
           </div>
           <div className='sub-container'>
            <img src={three} className='img'/>
            <h1 className='line'>
            Once you've achieved a wish, mark it off and celebrate your journey toward a fulfilled life.            </h1>
           </div>
        </div>

        <div className='btn-container'>
            <button className='btn-add'>Add a Wish 📝</button>
            <button className='btn-view'>View Wishes 📖</button>
        </div>
    </div>
  )
}

export default Home