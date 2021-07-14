
import React, {Component} from 'react';

import DisqusComment from './components/disqus';
import ContentsList from './components/contents'
import './App.css';

//https://electricburglar.tistory.com/105

class App extends Component {


  render() {
	
    return (
      <div className="App">
		<div className="black-nav">
			<h2> 개발 Blog </h2>	
		</div>
		<div className="contents_title">
        	<h1>Contents</h1>
		</div>
		<ContentsList/>
		<DisqusComment />
	  </div>
	
    );
  }
}

export default App;
