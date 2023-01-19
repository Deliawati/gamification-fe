/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

function GameOverlay({ onRestart, board }) {
  if (board.hasWon()) {
    return <div className="tile2048" />;
  } if (board.hasLost()) {
    return (
      <div className="gameOver" onClick={onRestart}>
        <img
          src="/assets/img-2048/try-again.gif"
          alt="Inténtalo de nuevo!!"
          style={{
            width: '100%',
            height: '100%',
            cursor: 'pointer',
          }}
        />
      </div>
    );
  }

  return null;
}

export default GameOverlay;
