import Player from './Player'
import Song from './Song'
import Library from './Library'
import { useState, useEffect } from 'react'
import chillHop from '../util.jsx'

function PlayerBox() {
	const [songs, setSongs] = useState(chillHop())
	const [currentSong, setCurrentSong] = useState(songs[0])
	const [isPlaying, setIsPlaying] = useState(false)

	return (
		<div className="App">
			<Song currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
			<Library
				songs={songs}
				setCurrentSong={setCurrentSong}
				setIsPlaying={setIsPlaying}
			/>
		</div>
	)
}

export default PlayerBox
