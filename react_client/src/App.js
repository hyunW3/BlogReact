import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import DisqusComment from './components/Disqus';
import ContentsList from './components/Contents';
import ContentTitle from './components/ContentTitle';
import WriteContent from './route/WriteContent';
import Hello from './route/Hello';
import './App.css';

//https://electricburglar.tistory.com/105
// https://velog.io/@pkbird/React-Router-1
class App extends Component {


  render() {
	
    return (
      <div className="App">
		<div className="black-nav">
			<h2> 개발 Blog </h2>	
		</div>
		<div>
			<Route exact path="/">
				<ContentTitle />
				<ContentsList/>
				<DisqusComment />
			</Route>
			<Route path="/write" >
				<WriteContent/>
			</Route>
		</div>
		
	  </div>
	
    );
  }
}

export default App;
