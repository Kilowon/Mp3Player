import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ setLibraryStatus, libraryStatus }) => {
	return (
		<nav>
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
