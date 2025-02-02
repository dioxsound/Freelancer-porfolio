import { useParams } from "react-router"

import { projects } from "./../helpers/projectList"

import Button_github from "../components/button_gitHub/Button_github"

const Project_page = () => {
	const { id } = useParams()
	const project = projects[id]

	return (
		<main className='section'>
			<div className='container'>
				<div className='project-details'>
					<h1 className='title-1'>{project.title}</h1>
					<img
						src={project.imgBig}
						alt={project.title}
						className='project-details__cover'
					/>

					<div className='project-details__desc'>
						<p>{project.skills}</p>
					</div>

					{project.githubLink ? <Button_github /> : null}
				</div>
			</div>
		</main>
	)
}

export default Project_page
