import "./style.css"
import gitHubIcon from "./../../img/icons/gitHub-black.svg"

const Button_github = () => {
	return (
		<a href='#!' className='btn-outline'>
			<img src={gitHubIcon} alt='' />
			GitHub repo
		</a>
	)
}

export default Button_github
