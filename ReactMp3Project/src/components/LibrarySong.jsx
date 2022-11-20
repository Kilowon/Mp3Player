import React from 'react'

const LibrarySong = ({ id, song, setCurrentSong, setIsPlaying }) => {
	const songSelectHandler = async () => {
		await setCurrentSong(song)
		setIsPlaying(true)
		/* if (songInfo.currentTime === 0) {
			audioRef.current.volume = 0.1
		} */
	}

	return (
		<div onClick={songSelectHandler} className="library-song">
			<img src={song.cover} />
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	)
}

export default LibrarySong
