import Image from 'next/image';
import Game from './Game';

export default function Home() {
  return (
    <main className="">
      <h1 className=" text-7xl text-center font-mono py-20">
        Tic-Tac-Toe Game!
      </h1>
      <Game />
    </main>
  );
}
