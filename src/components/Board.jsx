import React, { useState, useContext } from "react";
import LetterBoxRow from "./LetterBoxRow";
import { AppContext } from "../App";

const Board = () => {
   const { board, letterPosition } = useContext(AppContext);
   return (
      <div style={{ maxWidth: "500px", margin: "auto" }}>
         <LetterBoxRow row={board[0]} colorRow={letterPosition.row === 1} />
         <LetterBoxRow row={board[1]} colorRow={letterPosition.row === 2} />
         <LetterBoxRow row={board[2]} colorRow={letterPosition.row === 3} />
         <LetterBoxRow row={board[3]} colorRow={letterPosition.row === 4} />
         <LetterBoxRow row={board[4]} colorRow={letterPosition.row === 5} />
         <LetterBoxRow row={board[5]} colorRow={letterPosition.row === 6} />
      </div>
   );
};

export default Board;
