import React, { useState, useEffect, useContext } from "react";
import LetterBox from "./LetterBox";
import { AppContext } from "../App";

const LetterBoxRow = ({ row, colorRow }) => {
   const { indices, setIndices } = useContext(AppContext);
   const [color, setColor] = useState([]);

   useEffect(() => {
      setColor(getColorHighlight());
   }, [colorRow]);

   const getColorHighlight = () => {
      const colorArray = [];
      for (let index = 0; index < row.length; index++) {
         if (indices.length) {
            if (indices[index] === index) {
               colorArray.push("green");
            } else if (indices[index] !== -1) {
               colorArray.push("yellow");
            } else if (indices[index] === -1) {
               colorArray.push("gray");
            } else {
               colorArray.push("");
            }
         }
      }
      return colorArray;
   };

   return (
      <div style={{ display: "flex" }}>
         {row.map((letter, index) => (
            <LetterBox
               key={index}
               letter={letter}
               color={colorRow ? color[index] : ""}
            />
         ))}
      </div>
   );
};

export default LetterBoxRow;
