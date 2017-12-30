import React from 'react';
import Message from './Message';
import Form from './Form';

class App extends React.Component {
	render() {
		return (
			<div className="bloc">
				<div>
					<div className="messages">
						<Message pseudo={this.props.match.params.pseudo} />
					</div>
					<Form />
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