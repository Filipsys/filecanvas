"use client"

import { useState } from 'react'

const Counter = () => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <button onClick={handleClick}>
      {likes}
    </button>
  );
};

export default Counter;