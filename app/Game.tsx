'use client';

import { varRandomizer } from '@/typings';
import React, { useState } from 'react';
import Image from 'next/image';

const Game = () => {
  const urlImages = [
    '/images/Rock.jpg',
    '/images/Paper.jpg',
    '/images/Scissors.jpg',
  ];

  const [random, setrandom] = useState(0);

  const onClickRandomizer = () => {
    const newRandomizer = Math.floor(Math.random() * urlImages.length);
    setrandom(newRandomizer);
  };

  return (
    <div className="flex flex-col justify-center content-center">
      <Image
        height={300}
        width={300}
        alt="Tick-Tack-Toe image"
        src={urlImages[random]}
        onClick={onClickRandomizer}
        className="select-none cursor-pointer self-center justify-self-center rounded-lg transition duration-150 hover:scale-110 hover:drop-shadow-lg"
      />
      <button
        onClick={onClickRandomizer}
        className="justify-self-center self-center w-20 mt-16 p-2 bg-blue-300 rounded-md text-2xl transition duration-300 hover:scale-125 hover:bg-blue-100"
      >
        Play
      </button>
    </div>
  );
};

export default Game;
