import React from 'react'

const Song = ({ currentSong, isPlaying }) => {
	return (
		<div>
			<div
				className={`song-container ${
					isPlaying ? 'bg-pan-bottom container' : ''
				}`}
			>
				<img
					src={currentSong.cover}
					className={` ${isPlaying ? 'rotate-center' : ''} `}
				/>
				<h2>{currentSong.name}</h2>
				<h3>{currentSong.artist}</h3>
			</div>
			{/* <div className="bob">
				{[...Array(100)].map((_, i) => (
					<div className="circle-container" key={i}>
						<div className="circle"></div>
					</div>
				))}
			</div> */}
		</div>
	)
}

export default Song
