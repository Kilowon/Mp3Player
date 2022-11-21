import LibrarySong from './LibrarySong'

const Library = ({
	songs,
	currentSong,
	setCurrentSong,
	setIsPlaying,
	setSongs
}) => {
	return (
		<div className="library">
			<h2>Library</h2>
			<div className="library-songs">
				{songs.map(song => (
					<LibrarySong
						key={song.id}
						id={song.id}
						song={song}
						currentSong={currentSong}
						setCurrentSong={setCurrentSong}
						setIsPlaying={setIsPlaying}
					/>
				))}
			</div>
		</div>
	)
}

export default Library
