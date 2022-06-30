import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import './App.css';
import './Component/Style.css'
import StudentList from './Component/StudentList';
class App extends Component {
render() {
	return (
	<Router>
		<div>
			<div className="myNavbar">
				<ul className='size'>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About Us</Link>
					</li>
					<li>
						<Link to="/contact">Contact Us</Link>
					</li>
					<li>
						<Link to="/studentlist">Student List</Link>
					</li>
				</ul>
			</div>
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/about' element={< About />}></Route>
				<Route exact path='/contact' element={< Contact />}></Route>
				<Route exact path='/studentlist' element={< StudentList />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
