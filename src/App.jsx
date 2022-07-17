import { useState, createContext } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import defaultBoard from "./board";
import word from "./words";

export const AppContext = createContext();

function App() {
   const [board, setBoard] = useState(defaultBoard);
   const [gameWon, setGameWon] = useState(false);
   const [letterPosition, setLetterPosition] = useState({
      column: 0,
      row: 0,
   });

   const onEnter = () => {
      if (letterPosition.column > 4) {
         setLetterPosition({
            ...letterPosition,
            column: 0,
            row: letterPosition.row + 1,
         });

         setGameWon(word === board[letterPosition.row].join(""));
      }
   };

   const onBackspace = () => {
      if (letterPosition.column >= 0 && letterPosition.column <= 5) {
         const newBoard = [...board];
         newBoard[letterPosition.row][letterPosition.column - 1] = "";
         setBoard(newBoard);
         setLetterPosition({
            ...letterPosition,
            column:
               letterPosition.column - 1 < 0 ? 0 : letterPosition.column - 1,
         });
      }
   };

   const onKeySelect = (keyLetter) => {
      if (letterPosition.column <= 4) {
         const newBoard = [...board];
         newBoard[letterPosition.row][letterPosition.column] = keyLetter;
         setLetterPosition({
            ...letterPosition,
            column: letterPosition.column + 1,
         });
         setBoard(newBoard);
      }
   };

   return (
      <AppContext.Provider
         value={{
            board,
            setBoard,
            letterPosition,
            onEnter,
            onBackspace,
            onKeySelect,
         }}
      >
         <h1>Wordle</h1>
         <Board />
         <Keyboard />
         {gameWon && <h1>You won!</h1>}
      </AppContext.Provider>
   );
}

export default App;
