import React from 'react';
import Message from './Message';
import Form from './Form';
import {base} from '../base';

class App extends React.Component {

	state = {
		messages : {}
	}

	componentWillMount() {
		this.ref = base.syncState('/', {
			context: this,
			state: 'messages'
		});
	}

	addMessage = message => {
		const messages = {...this.state.messages};
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message;
		Object.keys(messages).slice(0, -15).map(key => messages[key] = null);
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