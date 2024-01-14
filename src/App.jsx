import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')

  function handleActiveSquare() {
    setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player nameInit='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player nameInit='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleActiveSquare} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  )
}

export default App
