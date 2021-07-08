
import React, {Component} from 'react';
import './App.css';

//https://electricburglar.tistory.com/105

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/titles')
      .then(res => res.json())
      .then(users => this.setState({users}))
  };
  render() {
    return (
      <div className="App">
		<div className="black-nav">
			<h2> 개발 Blog </h2>	
		</div>
		<div className="contents">
        	<h1>Users</h1>
			
        	{this.state.users.map(user =>
          		<div key={user.id}>
            		{user.title} <br/>
					{user.date}에 작성
					<hr/>
          		</div>
        	)}
		
		</div>
      </div>
    );
  }
}

export default App;
