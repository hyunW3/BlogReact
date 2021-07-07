
import React, {Component} from 'react';
import './App.css';

//https://electricburglar.tistory.com/105

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}))
  };
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        {this.state.users.map(user =>
          <div key={user.id}>
            {user.name}
          </div>
        )}
      </div>
    );
  }
}

export default App;
