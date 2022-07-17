import React, { useState, useContext } from "react";
import LetterBoxRow from "./LetterBoxRow";
import LetterBox from "./LetterBox";
import { AppContext } from "../App";

const Board = () => {
   const { board } = useContext(AppContext);
   return (
      <div style={{ maxWidth: "500px", margin: "auto" }}>
         <LetterBoxRow rowIndex={0} />
         <LetterBoxRow rowIndex={1} />
         <LetterBoxRow rowIndex={2} />
         <LetterBoxRow rowIndex={3} />
         <LetterBoxRow rowIndex={4} />
      </div>
   );
};

export default Board;
