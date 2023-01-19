/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Tile from './Tile';
import Cell from './Cell';
import { Board } from '../../helper';
import useEvent from '../../hooks/useEvent';
import GameOverlay from './GameOverlay';

function BoardView() {
  const [board, setBoard] = useState(new Board());

  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      const direction = event.keyCode - 37;
      const boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board,
      );
      const newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent('keydown', handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => (
    <div key={rowIndex}>
      {row.map((col, colIndex) => <Cell key={rowIndex * board.size + colIndex} />)}
    </div>
  ));

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => <Tile tile={tile} key={index} />);

  const resetGame = () => {
    setBoard(new Board());
  };

  return (
    <div>
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>
          New Game
        </div>
        <div className="score-box">
          <div className="score-header">PUNTOS</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
    </div>
  );
}

export default BoardView;
