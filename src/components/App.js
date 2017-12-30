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

		const messages = Object
		.keys(this.state.messages)
		.map(key => <Message key={key} details={this.state.messages[key]}/>);
		
		return (
			<div className="bloc">
				<div>
					<div className="messages">
						{messages}
					</div>
					<Form 
						addMessage={this.addMessage} 
						pseudo={this.props.match.params.pseudo}
						length="140"
					/>
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