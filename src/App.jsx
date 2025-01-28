import "./styles/main.css"

import { BrowserRouter as Router, Routes, Route } from "react-router"
import ScrollToTop from "./utils/ScrollToTop"

import Navbar from "./components/navbar/navbar"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Project_page from "./pages/Project_page"
import Contacts from "./pages/Contacts"
import Footer from "./components/footer/Footer"

const App = () => {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/projects' element={<Projects />}></Route>
					<Route path='/projects/:id' element={<Project_page />}></Route>
					<Route path='/contacts' element={<Contacts />}></Route>
				</Routes>

				<Footer />
			</Router>
		</div>
	)
}

export default App
