import './styles/App.scss'
import Player from './components/Player'
import Song from './/components/Song'
import Library from './components/Library'
import { useState } from 'react'
import chillHop from './util.jsx'

function App() {
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

export default App
