"use client"

import { useState } from 'react'

const Counter = () => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <input type="radio" name="button" id="btn1" /> 
  );
};

export default Counter;