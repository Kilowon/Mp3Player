import Player from './Player'
import Song from './Song'
import Library from './Library'
import { useState, useEffect } from 'react'
import chillHop from '../util.jsx'
import Nav from './Nav'

function PlayerBox() {
	const [songs, setSongs] = useState(chillHop())
	const [currentSong, setCurrentSong] = useState(songs[0])
	const [isPlaying, setIsPlaying] = useState(false)
	const [libraryStatus, setLibraryStatus] = useState(false)

	return (
		<div className="player-box">
			<Nav setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus} />
			<Song currentSong={currentSong} isPlaying={isPlaying} />
			<Player
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
			/>
			<Library
				libraryStatus={libraryStatus}
				songs={songs}
				setCurrentSong={setCurrentSong}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
			/>
		</div>
	)
}

export default PlayerBox
