import React from 'react';
import { render } from 'react-dom';
//import './style/SASS/import.css';

class Connexion extends React.Component {
	render() {
		return (
			<div className="bloc-connexion">
				<form className="bloc-connexion__connexion">
					<input placeholder="Enter your pseudo" required />
					<button type="submit">Go chat !</button>
				</form>
			</div>
		)
	}
}

render(<Connexion />, document.getElementById('root'));