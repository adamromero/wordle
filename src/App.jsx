import { useState, createContext } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import defaultBoard from "./board";
import word from "./words";
import "./index.css";

export const AppContext = createContext();

function App() {
   const [board, setBoard] = useState(defaultBoard);
   const [gameOver, setGameOver] = useState(false);
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

         setGameOver(word === board[letterPosition.row].join(""));
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
            gameOver,
         }}
      >
         <h1 className="text-3xl font-bold text-center my-8">Wordle</h1>
         <Board />
         <GameOver />
         <Keyboard />
      </AppContext.Provider>
   );
}

export default App;
