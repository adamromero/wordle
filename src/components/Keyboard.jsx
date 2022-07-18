import React, { useState, useEffect, useCallback, useContext } from "react";
import Key from "./Key";
import { topKeys, middleKeys, bottomKeys } from "../keys";
import { AppContext } from "../App";
import word from "../words";

const Keyboard = () => {
   const {
      board,
      letterPosition,
      onEnter,
      onBackspace,
      onKeySelect,
      gameOver,
   } = useContext(AppContext);

   const [guessedLetters, setGuessedLetters] = useState([]);

   const onlyLetters = (str) => {
      if (str.length > 1) return "";
      return str.replace(/[^a-zA-Z]/g, "");
   };

   const handleKeyPress = useCallback((e) => {
      if (onlyLetters(e.key)) {
         onKeySelect(e.key.toUpperCase());
      } else if (e.key === "Enter") {
         onEnter();
         setGuessedLetters((prev) =>
            [...prev, board[letterPosition.row]].flat()
         );
      } else if (e.key === "Backspace") {
         onBackspace();
      }
   });

   const colorKeys = (key) => {
      if (key.length > 1) return;

      let color = "";
      if (guessedLetters.includes(key)) {
         guessedLetters.forEach((letter, index) => {
            if (letter === key) {
               if (letter === word[index % 5]) {
                  color = "#54ad5c";
               } else if (word.includes(letter)) {
                  color = "#c1af5c";
               } else {
                  color = "#777c7f";
               }
            }
         });
      }

      return color;
   };

   useEffect(() => {
      if (!gameOver) {
         document.addEventListener("keydown", handleKeyPress);
      }

      return () => {
         document.removeEventListener("keydown", handleKeyPress);
      };
   }, [handleKeyPress]);

   return (
      <div className="mt-8 mx-auto">
         <div className="flex justify-center	mb-2	 gap-2 text-center">
            {topKeys.map((keyLetter, index) => (
               <Key
                  key={index}
                  keyLetter={keyLetter}
                  color={colorKeys(keyLetter)}
               />
            ))}
         </div>
         <div className="flex justify-center	mb-2	 gap-2 text-center">
            {middleKeys.map((keyLetter, index) => (
               <Key
                  key={index}
                  keyLetter={keyLetter}
                  color={colorKeys(keyLetter)}
               />
            ))}
         </div>
         <div className="flex justify-center	mb-2	 gap-2 text-center">
            {bottomKeys.map((keyLetter, index) => (
               <Key
                  key={index}
                  keyLetter={keyLetter}
                  color={colorKeys(keyLetter)}
               />
            ))}
         </div>
      </div>
   );
};

export default Keyboard;
