import React, { useState, useEffect, useCallback, useContext } from "react";
import Key from "./Key";
import { topKeys, middleKeys, bottomKeys } from "../keys";
import { AppContext } from "../App";

const Keyboard = () => {
   const { onEnter, onBackspace, onKeySelect } = useContext(AppContext);

   const onlyLetters = (str) => {
      if (str.length > 1) return "";
      return str.replace(/[^a-zA-Z]/g, "");
   };

   const handleKeyPress = useCallback((e) => {
      if (onlyLetters(e.key)) {
         onKeySelect(e.key.toUpperCase());
      } else if (e.key === "Enter") {
         onEnter();
      } else if (e.key === "Backspace") {
         onBackspace();
      }
   });

   useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);

      return () => {
         document.removeEventListener("keydown", handleKeyPress);
      };
   }, [handleKeyPress]);

   return (
      <div className="mt-8 mx-auto">
         <div className="flex justify-center	mb-2	 gap-2 text-center">
            {topKeys.map((keyLetter, index) => (
               <Key key={index} keyLetter={keyLetter} />
            ))}
         </div>
         <div className="flex justify-center	mb-2	 gap-2 text-center">
            {middleKeys.map((keyLetter, index) => (
               <Key key={index} keyLetter={keyLetter} />
            ))}
         </div>
         <div className="flex justify-center	mb-2	 gap-2 text-center">
            {bottomKeys.map((keyLetter, index) => (
               <Key key={index} keyLetter={keyLetter} />
            ))}
         </div>
      </div>
   );
};

export default Keyboard;
