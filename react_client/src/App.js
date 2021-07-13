
import React, {Component} from 'react';

import Disqus_comment from './components/disqus';
import './App.css';

//https://electricburglar.tistory.com/105

class App extends Component {

  state = {users: []} // id, titles, date, thumbs 


  componentDidMount() {
    fetch('/titles')
      .then(res => res.json())
      .then(users => this.setState({users})); // TODO1 : 
  };


  render() {
	
    return (
      <div className="App">
		<div className="black-nav">
			<h2> 개발 Blog </h2>	
		</div>
		<div className="contents_title">
        	<h1>Contents</h1>
		</div>
		<div className="contents">
        	{this.state.users.map(user =>
          		<div key={user.id}>
            		<h3>
						{user.title} 
						 👍{user.thumbs}
					</h3>
					{user.date}에 작성
					<hr/>
          		</div>
        	)}
		
		<Disqus_comment />
		</div>
	  </div>
	
    );
  }
}

export default App;
