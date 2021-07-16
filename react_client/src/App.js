
import React, {Component} from 'react';

import DisqusComment from './components/Disqus';
import ContentsList from './components/Contents';
import ContentTitle from './components/ContentTitle';
import './App.css';

//https://electricburglar.tistory.com/105

class App extends Component {


  render() {
	
    return (
      <div className="App">
		<div className="black-nav">
			<h2> 개발 Blog </h2>	
		</div>
		<ContentTitle />
		<ContentsList/>
		<DisqusComment />
	  </div>
	
    );
  }
}

export default App;
