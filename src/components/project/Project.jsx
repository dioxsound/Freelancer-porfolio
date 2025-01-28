import { NavLink } from "react-router"
import PropTypes from "prop-types"

import "./style.css"

const Project = ({ src, title, index }) => {
	return (
		<NavLink to={`/projects/${index}`}>
			<li className='project'>
					<img src={src} alt={title} className='project__img' />
					<h3 className='project__title'>{title}</h3>
			</li>
		</NavLink>
	)
}

Project.propTypes = {
	src: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
}

export default Project
