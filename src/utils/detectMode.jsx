const detectMode = () => {
	if (
		window.matchMedia &&
		window.matchMedia("(prefers-color-scheme: dark)").matches
	) {
		return "dark"
	} else {
		return "white"
	}
}

export default detectMode
