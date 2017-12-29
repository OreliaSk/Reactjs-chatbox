import React from 'react';

class Form extends React.Component {
	render() {
		return (
			<form className="form">
				<textarea maxLength="140"></textarea>
				<div className="info">140</div>
				<button className="btn btn-default">Send</button>
			</form>
		)
	}
}

export default Form