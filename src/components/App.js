import React from 'react';
import Message from './Message';
import Form from './Form';

class App extends React.Component {

	state =  {
		messages : {}
	}

	addMessage = message => {
		const messages = {...this.state.messages};
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		this.setState({messages});
	}

	render() {
		return (
			<div className="bloc">
				<div>
					<div className="messages">
						<Message pseudo={this.props.match.params.pseudo} />
					</div>
					<Form addMessage={this.addMessage} />
				</div>
			</div>
		)
	}
}

export default App

/*
this.props.match.params.pseudo to get user pseudo instead of
this.props.params.pseudo (=> undefined)
*/