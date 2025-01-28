import Project from "./../components/project/Project"
import { projects } from "./../helpers/projectList"

const Projects = () => {
	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>Projects</h2>
				<ul className='projects'>
					{projects.map((data, key) => (
						<Project title={data.title} src={data.img} key={key} index={key}/>
					))}
				</ul>
			</div>
		</main>
	)
}

export default Projects
