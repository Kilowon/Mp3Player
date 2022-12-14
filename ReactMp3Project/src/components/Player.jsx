import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause,
	faVolumeHigh
} from '@fortawesome/free-solid-svg-icons'
import { useState, useRef, useEffect } from 'react'

const Player = ({
	songs,
	currentSong,
	setCurrentSong,
	isPlaying,
	setIsPlaying
}) => {
	const audioRef = useRef(null)

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play()
		} else {
			audioRef.current.pause()
		}
	}, [isPlaying])
	const soundLevelHandler = () => {
		if (songInfo.currentTime === 0) {
			audioRef.current.volume = 0.1
		}
	}
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause()
			setIsPlaying(!isPlaying)
		} else {
			audioRef.current.play()
			setIsPlaying(!isPlaying)
			// set audio volume to 0.1 on first play
			if (songInfo.currentTime === 0) {
				audioRef.current.volume = 0.1
			}
		}
	}
	const timeUpdateHandler = e => {
		const current = e.target.currentTime
		const duration = e.target.duration
		setSongInfo({ ...songInfo, currentTime: current, duration })
	}
	const getTime = time => {
		return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
	}
	const dragHandler = e => {
		audioRef.current.currentTime = e.target.value
		setSongInfo({ ...songInfo, currentTime: e.target.value })
	}
	const volumnHandler = e => {
		audioRef.current.volume = e.target.value
		setSongInfo({ ...songInfo, currentVolume: e.target.value })
	}
	const autoPlayHandler = () => {
		if (isPlaying) {
			audioRef.current.play()
		}
	}
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
		currentVolume: 0.2
	})
	const skipTrackHandler = direction => {
		let currentIndex = songs.findIndex(song => song.id === currentSong.id)
		if (direction === 'skip-forward') {
			setCurrentSong(songs[(currentIndex + 1) % songs.length])
		}
		if (direction === 'skip-back') {
			if ((currentIndex - 1) % songs.length === -1) {
				setCurrentSong(songs[songs.length - 1])
				return
			}
			setCurrentSong(songs[(currentIndex - 1) % songs.length])
		}
		setIsPlaying(true)
	}

	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					onChange={dragHandler}
					min={0}
					max={songInfo.duration}
					value={songInfo.currentTime}
					type="range"
				/>
				<p>{getTime(songInfo.duration || 0)}</p>
			</div>

			<div className="play-control">
				<FontAwesomeIcon
					onClick={() => skipTrackHandler('skip-back')}
					className="skip-back"
					size="2x"
					icon={faAngleLeft}
				/>
				<FontAwesomeIcon
					onClick={playSongHandler}
					className="play"
					size="2x"
					icon={isPlaying ? faPause : faPlay}
				/>
				<FontAwesomeIcon
					onClick={() => skipTrackHandler('skip-forward')}
					className="skip-forward"
					size="2x"
					icon={faAngleRight}
				/>
				<div className="volumn-control">
					<input
						className="bobert"
						onChange={volumnHandler}
						min={0}
						max={1}
						value={songInfo.currentVolume}
						step={0.01}
						type="range"
					/>
					<FontAwesomeIcon
						className="volume-icon"
						size="1x"
						icon={faVolumeHigh}
					/>
				</div>
			</div>
			<audio
				onPlay={soundLevelHandler}
				onLoadedMetadata={timeUpdateHandler}
				onLoadedData={autoPlayHandler}
				onTimeUpdate={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
				onEnded={() => skipTrackHandler('skip-forward')}
			></audio>
		</div>
	)
}

export default Player
