import LibrarySong from './LibrarySong'

const Library = ({
	songs,
	currentSong,
	setCurrentSong,
	setIsPlaying,
	setSongs,
	libraryStatus
}) => {
	return (
		<div className={`library ${libraryStatus ? 'active-library' : ''} `}>
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
