import LibrarySong from './LibrarySong'

const Library = ({ songs, setCurrentSong, setIsPlaying }) => {
	return (
		<div className="library">
			<h2>Library</h2>
			<div className="library-songs">
				{songs.map(song => (
					<LibrarySong
						key={song.id}
						id={song.id}
						song={song}
						setCurrentSong={setCurrentSong}
						songs={songs}
						setIsPlaying={setIsPlaying}
					/>
				))}
			</div>
		</div>
	)
}

export default Library
