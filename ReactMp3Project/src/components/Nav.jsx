import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ setLibraryStatus, libraryStatus }) => {
	return (
		<nav>
			<h1>Chillhop</h1>
			<button
				className="library-btn"
				onClick={() => setLibraryStatus(!libraryStatus)}
			>
				Library <FontAwesomeIcon icon={faMusic} />
			</button>
		</nav>
	)
}

export default Nav
