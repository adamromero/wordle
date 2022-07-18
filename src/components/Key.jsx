import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyLetter }) => {
   const { onEnter, onBackspace, onKeySelect } = useContext(AppContext);

   const setLetterToBoard = () => {
      if (keyLetter === "Enter") {
         onEnter();
      } else if (keyLetter === "Backspace") {
         onBackspace();
      } else {
         onKeySelect(keyLetter);
      }
   };

   return (
      <button
         className="rounded-md font-bold bg-gray-300  text-gray-600	 hover:bg-gray-400 transition-colors	 px-6 py-2"
         onClick={setLetterToBoard}
      >
         {keyLetter}
      </button>
   );
};

export default Key;
