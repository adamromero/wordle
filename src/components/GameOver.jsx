import React, { useContext } from "react";
import { AppContext } from "../App";
import word from "../words";

const GameOver = () => {
   const { gameOver, letterPosition } = useContext(AppContext);

   if (gameOver) {
      return (
         <div className="font-bold text-center my-8">
            <h2 className="text-2xl">You won!</h2>
            <p>The word was: {word}</p>
         </div>
      );
   } else if (letterPosition.row > 4) {
      return (
         <div className="font-bold text-center my-8">
            <h2>Game over</h2>
            <p>The word was: {word}</p>
         </div>
      );
   } else {
      return null;
   }
};

export default GameOver;
