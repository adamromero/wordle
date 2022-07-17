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
         color = "green";
      } else if (includes) {
         color = "yellow";
      } else {
         color = "gray";
      }
   }

   return (
      <div
         style={{
            width: "50px",
            height: "50px",
            border: "1px solid gray",
            backgroundColor: color,
         }}
      >
         {letter}
      </div>
   );
};

export default LetterBox;
