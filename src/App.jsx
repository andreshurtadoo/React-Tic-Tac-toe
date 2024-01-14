import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player nameInit='Player 1' symbol='X' />
          <Player nameInit='Player 2' symbol='O' />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
