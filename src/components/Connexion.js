import React from 'react';

class Connexion extends React.Component {
	render() {
		return (
			<div className="bloc-connexion">
				<form className="bloc-connexion__connexion">
					<div className="bloc-connexion__login">
						<label>Enter your pseudo</label>
						<input placeholder="Enter your pseudo" />
					</div>
					<p className="bloc-connexion__btn">
						<button className="btn btn-default" type="submit">Go chat !</button>
					</p>
				</form>
			</div>
		)
	}
}

export default Connexion