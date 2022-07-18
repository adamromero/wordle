import React from "react";
import LetterBox from "./LetterBox";

const LetterBoxRow = ({ rowIndex }) => {
   return (
      <>
         <LetterBox letterPos={0} rowIndex={rowIndex} />
         <LetterBox letterPos={1} rowIndex={rowIndex} />
         <LetterBox letterPos={2} rowIndex={rowIndex} />
         <LetterBox letterPos={3} rowIndex={rowIndex} />
         <LetterBox letterPos={4} rowIndex={rowIndex} />
      </>
   );
};

export default LetterBoxRow;
