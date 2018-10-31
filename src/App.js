import React from 'react';
import './App.css';

let allUsers = ['Karina', 'Tomasz', 'Bartek', 'Ola', 'Aleksandra', 'Janusz'];

const UsersList = ({users})=> {

	if(users.length > 0) {
		return (<ul>
			{users.map(user => <li key={user}>{user}</li>)}
		</ul>);
	}

	return (
		<p>NO RESULTS!</p>
	)

};

class App extends React.Component {

	constructor(){
		super();
		this.state = {
			filteredArray: allUsers
		}
	}

	filterUsers(text) {
		return new Promise(resolve => {
			const time = (Math.random() + 1) * 250;
			setTimeout(() => {
				const filteredUsers = allUsers.filter(user => user.toLowerCase().includes(text.toLowerCase()));
				resolve(filteredUsers);
			}, time) ;
		});
	}

	takeAndFilterValue(e){
		let text = e.target.value;
		this.filterUsers(text).then(filteredUsers=>	this.setState({
			filteredArray: filteredUsers
		}));
		if(text === null) {
			this.setState({
				filteredArray: allUsers
			})
		}
	}

	takeValue= () => {
		let input = document.querySelector('#val');
		console.log('value: ', input.value);
		input.value = ''
	};



	render() {
		return (<div>
			<div className="ui input">
				<input type="search" title="coś tam" id="val" />
				<button onClick={this.takeValue}>Take Value</button>
				<input type="search" onInput={this.takeAndFilterValue.bind(this)}/>
			</div>
			<UsersList users={this.state.filteredArray}/>
		</div>);
	}
}

export default App;
