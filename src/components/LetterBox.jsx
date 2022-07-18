import React, { useContext } from "react";
import { AppContext } from "../App";
import word from "../words";

const LetterBox = ({ letterPos, rowIndex }) => {
   const { board, letterPosition } = useContext(AppContext);

   const letter = board[rowIndex][letterPos];
   const correct = word[letterPos] === letter;
   const includes = word.includes(letter);

   let color = "";
   if (letterPosition.row > rowIndex) {
      if (correct) {
         color = "#54ad5c";
      } else if (includes) {
         color = "#c1af5c";
      } else {
         color = "#777c7f";
      }
   }

   return (
      <div
         className="w-16 h-16 border-2 border-gray-200 bg-gray-50	 flex justify-center items-center rounded"
         style={{
            backgroundColor: color,
         }}
      >
         {letter}
      </div>
   );
};

export default LetterBox;
