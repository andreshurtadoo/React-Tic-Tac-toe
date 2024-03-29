import { useState } from "react"

export default function Player({ nameInit, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(nameInit)
    const [isEditing, setIsEditing] = useState(false)

    function handleEditClick() {
        setIsEditing((editing) => !editing)
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function handlePlayerName(event) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handlePlayerName} required />
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}