import React from 'react';

class Form extends React.Component {

	// Functions
	createMessage(e) {
		e.preventDefault();
		const message = this.message.value;
		this.props.addMessage(message);

		this.messageForm.reset();
	}

	render() {
		return (
			<form 
			onSubmit={e => this.createMessage(e)}
			ref={(input) => this.messageForm = input}
			className="form"
			>
				<textarea 
					ref={(input) => this.message = input}
					maxLength="140"
				>
				</textarea>
				<div className="info">140</div>
				<button className="btn btn-default">Send</button>
			</form>
		)
	}
}

export default Form