import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ setLibraryStatus, libraryStatus }) => {
	return (
		<nav>
			<div className="space"></div>
			<div className="space"></div>
			<button
				className={`library-btn ${
					libraryStatus ? 'active-library-button' : ''
				} `}
				onClick={() => setLibraryStatus(!libraryStatus)}
			>
				<FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	)
}

export default Nav
