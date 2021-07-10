
import React, {Component} from 'react';
import {DiscussionEmbed} from 'disqus-react';
import './App.css';

//https://electricburglar.tistory.com/105

class App extends Component {

  state = {users: []}


  componentDidMount() {
    fetch('/titles')
      .then(res => res.json())
      .then(users => this.setState({users}));
  };

  thumbs_up = (id) => {
	  console.log("hi",id)
	  this.setState({
		  thumbs : this.state.users[0].thumbs + 1
	  })
	  console.log(this.state.users[0])
	  this.state.users[0].thumbs = 1
	  console.log(this.state.users[0])
	  /*
	  var newArr = [...state];
	  newArr.users[0].thumbs = newArr.users[0].thumbs+1;
	  setState(newArr);
	  */
	  
  }

  render() {
	const disqusShortname = "react-blog-4"
    const disqusConfig = {
      	url: "https://react-ohbae-bzomu.run.goorm.io",
      	identifier: "article-id",
      	title: "Title of Your Article"
	}
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
						<p onClick={this.thumbs_up.bind(user.id)}>
						 👍{user.thumbs}
						</p>
						
						
					</h3>
					{user.date}에 작성
					<hr/>
          		</div>
        	)}
		</div>
	<DiscussionEmbed style={{padding : "20px"}}
    	shortname={disqusShortname}
    	config={disqusConfig  }
	/>
      </div>
    );
  }
}
export default App;
