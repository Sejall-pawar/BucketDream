import React, { useState } from 'react'
import './Add.css';
import HomeButton from "./../../components/Homebutton/Homebutton"
import toast from 'react-hot-toast';


function Add() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [targetDate, setTargetDate] = useState("");
  const [category, setCategory] = useState();
  const [emoji, setEmoji] = useState();

  const addWish = () => {
    const wishes = JSON.parse(localStorage.getItem("wishes")) || [];

    const wishObject = {
      title,
      description,
      targetDate,
      category
    };

    wishes.push(wishObject);

    localStorage.setItem("wishes", JSON.stringify(wishes));

    toast.success("Wish added successfully!");

    setTitle("");
    setDescription("");
    setTargetDate("");
    setCategory("");
  };

  return (
    <div>
      <h1 className='add'>Add Wish 📝</h1>

      <input
        type='text'
        placeholder='Whats your wish'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        className="user-input"
      />
      <input
        type='text'
        placeholder='Describe your wish in detail.'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
        className="user-input"
      />

      <div className='date'>
        <label
          htmlFor="targetDate"
          className={`date-label ${targetDate ? 'hidden' : ''}`}
        >
          When do you want to achieve this?
        </label>
        <input
          type="date"
          id="targetDate"
          value={targetDate}
          onChange={(e) => setTargetDate(e.target.value)}
          className="user-input date-input"
        />

      </div>

      <select value={category} onChange={(e) => setCategory(e.target.value)} className='user-input2'>
        <option value="">Select Category</option>
        <option value="travel">Travel</option>
        <option value="adventure">Adventure</option>
        <option value="skills">Skills</option>
        <option value="personal growth">Personal Growth</option>
      </select>

      <button type='button'
        className='add-btn'
        onClick={addWish}>
        + Add Wish
      </button>



      <HomeButton />
    </div>
  )
}

export default Add