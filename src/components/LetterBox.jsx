import React from "react";

const LetterBox = ({ letter, color }) => {
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
