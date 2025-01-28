import { useEffect, useRef } from "react"
import { useLocalStorage } from "../../utils/useLocalStorage"

import detectMode from "../../utils/detectMode"

import sun from "../../img/icons/sun.svg"
import moon from "../../img/icons/moon.svg"

import "./style.css"

const Button_mode = () => {
	const [mode, setMode] = useLocalStorage("mode", detectMode())
	const buttonRef = useRef(null)

	useEffect(() => {
		if (mode == "dark") {
			document.body.classList.add("dark")
			buttonRef.current.classList.add("dark-mode-btn--active")
		} else {
			document.body.classList.remove("dark")
			buttonRef.current.classList.remove("dark-mode-btn--active")
		}
	}, [mode])

	function toggleMode() {
		setMode(currentValue => (currentValue == "light" ? "dark" : "light"))
	}

	return (
		<button ref={buttonRef} className='dark-mode-btn' onClick={toggleMode}>
			<img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
			<img src={moon} alt='Dark mode' className='dark-mode-btn__icon' />
		</button>
	)
}

export default Button_mode
