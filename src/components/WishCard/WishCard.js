import React from 'react'
import "./WishCard.css"
import { json } from 'react-router-dom';

function deleteWish (index) {
  const savedwish = JSON.parse(localStorage.getItem("wishes")) || [];
  savedwish.splice(index, 1);
  localStorage.setItem("wishes", JSON.stringify(savedwish));

  window.location.reload();
}

function WishCard({ index, title, description, targetdate, category }) {
  return (
    <div>
      <div className='main'>
        <div className='info'><span>📝</span>{title}</div>
        <div className='info'><span>💡</span>{description}</div>
        <div className='info'><span>📅</span>{targetdate}</div>
        <div className='info'><span>🎨</span>{category}</div>
        <button type='button' className='complete-btn'
          onClick={() => {
            deleteWish(index);
          }}>
          Completed!
        </button>
      </div>
    </div>
  )
}

export default WishCard