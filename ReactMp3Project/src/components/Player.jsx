import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlay,
	faAngleLeft,
	faAngleRight,
	faPause
} from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react'

const Player = ({ currentSong, setCurrentSong, isPlaying, setIsPlaying }) => {
	// Refs
	const audioRef = useRef(null)
	const playSongHandler = () => {
		if (isPlaying) {
			audioRef.current.pause()
			setIsPlaying(!isPlaying)
		} else {
			audioRef.current.play()
			setIsPlaying(!isPlaying)
		}
	}
	const timeUpdateHandler = e => {
		const current = e.target.currentTime
		const duration = e.target.duration
		setSongInfo({ ...songInfo, currentTime: current, duration })
	}
	const [songInfo, setSongInfo] = useState({
		currentTime: null,
		duration: null
	})

	return (
		<div className="player">
			<div className="time-control">
				<p>Start Time</p>
				<input type="range" />
				<p>End Time</p>
			</div>
			<div className="play-control">
				<FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
				<FontAwesomeIcon
					onClick={playSongHandler}
					className="play"
					size="2x"
					icon={faPlay}
				/>
				<FontAwesomeIcon
					className="skip-forward"
					size="2x"
					icon={faAngleRight}
				/>
			</div>
			<audio ref={audioRef} src={currentSong.audio}></audio>
		</div>
	)
}

export default Player
