import './styles/App.scss'
import Player from './components/Player'
import Song from './/components/Song'
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
		</div>
	)
}

export default App
