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

   return <button onClick={setLetterToBoard}>{keyLetter}</button>;
};

export default Key;
